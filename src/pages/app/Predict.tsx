import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Box from '@mui/material/Box';
import Typography from '@mui/joy/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import axios from 'axios';

import { BASE_URL } from '../../config';

// Styled box for image upload
const UploadBox = styled(Box)(() => ({
    border: '2px dashed #1976d2',
    borderRadius: '8px',
    width: '100%',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: '#f5f5f5',
    color: '#1976d2',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
        backgroundColor: '#e3f2fd',
    },
}));

const ScanOverlay = styled(Box)(({ scanning }: { scanning: boolean }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(25, 118, 210, 0.2)',
    display: scanning ? 'block' : 'none',
}));

const ScanLine = styled(Box)(({ scanning }: { scanning: boolean }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '10px',
    backgroundColor: '#1976d2',
    boxShadow: '0 0 10px rgba(25, 118, 210, 0.7)',
    animation: scanning ? 'scanAnimation 1.5s linear infinite' : 'none',
    '@keyframes scanAnimation': {
        '0%': { top: 0 },
        '50%': { top: '90%' },
        '100%': { top: 0 },
    },
}));

const ResultBox = styled(Box)(({ prediction }: { prediction: string | null }) => ({
    width: '100%',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '16px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    backgroundColor: prediction === 'NO' ? '#e8f5e9' : '#ffcccc',
    color: prediction === 'NO' ? 'green' : 'red',
    borderRadius: '8px',
}));

const Predict: React.FC = () => {
    const [image, setImage] = useState<File | null>(null);
    const [prediction, setPrediction] = useState<string | null>(null);
    const [confidence, setConfidence] = useState<number | null>(null);
    const [scanning, setScanning] = useState(false);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImage(file);
            setPrediction(null);
            setConfidence(null);
        }
    };

    const handlePredict = async () => {
        if (image) {
            setScanning(true); // Keep scanning while waiting for response

            const formData = new FormData();
            formData.append('file', image);

            try {
                const response = await axios.post(
                    `${BASE_URL}/predict`,
                    formData,
                    {
                        headers: { 'Content-Type': 'multipart/form-data' },
                    }
                );

                const { prediction, confidence } = response.data;
                setPrediction(prediction);
                setConfidence(confidence * 100);
            } catch (error) {
                console.error('Prediction error:', error);
                setPrediction('Error occurred');
            } finally {
                setScanning(false); // Stop scanning when response is received
            }
        }
    };

    return (
        <DashboardLayout>
            <Typography level="h1" sx={{ mb: 2 }}>
                Brain Tumor Prediction 🧠
            </Typography>
            <Typography sx={{ fontSize: 'lg', color: 'text.secondary' }}>
                Upload an MRI image of the patient's brain below, and let the AI model predict if a tumor is present.
            </Typography>
            <Box
                sx={{
                    mt: 4,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <label htmlFor="upload-image" style={{ flex: 1, marginRight: '16px', position: 'relative' }}>
                    <UploadBox
                        sx={{
                            width: '100%',
                            height: prediction ? '500px' : '70vh',
                        }}
                    >
                        {!image && <Typography>Upload Image</Typography>}
                        <input
                            id="upload-image"
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={handleImageUpload}
                        />
                        {image && (
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Uploaded"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        )}
                        <ScanOverlay scanning={scanning}>
                            <ScanLine scanning={scanning} />
                        </ScanOverlay>
                    </UploadBox>
                </label>
                {prediction && (
                    <ResultBox prediction={prediction}
                        sx={{
                            width: '50%',
                            height: '500px',
                            mt: -0.1
                        }}
                    >
                        {prediction === 'TUMOR' ? 'Brain Tumor Detected' : 'No Brain Tumor'} <br />
                        Confidence: {confidence?.toFixed(2)}%
                    </ResultBox>
                )}
            </Box>
            <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Button variant="contained" color="primary" onClick={handlePredict} disabled={!image || scanning}>
                    {scanning ? 'Scanning...' : 'Predict'}
                </Button>
            </Box>
        </DashboardLayout>
    );
};

export default Predict;
