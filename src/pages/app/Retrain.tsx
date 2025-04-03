import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Box from '@mui/material/Box';
import Typography from '@mui/joy/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import axios from 'axios';

import { BASE_URL } from '../../config';


const RetrainBox = styled(Box)(() => ({
    border: '2px dashed #1976d2',
    borderRadius: '8px',
    width: '100%',
    height: '200px',
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    color: '#1976d2',
    textAlign: 'center',
    padding: '16px',
    '&:hover': {
        backgroundColor: '#e3f2fd',
    },
}));

const Retrain: React.FC = () => {
    const [status, setStatus] = useState<string | null>(null);
    const [jobId, setJobId] = useState<string | null>(null);
    const [trainingData, setTrainingData] = useState<{
        yes_images: number;
        no_images: number;
    } | null>(null);

    const handleRetrain = async () => {
        setStatus('Retraining in progress...');

        try {
            const response = await axios.post(`${BASE_URL}/retrain/`, null, {
                params: {
                    epochs: 2,
                    batch_size: 10,
                    learning_rate: 0.001,
                },
            });

            const { message, job_id, training_data } = response.data;
            setStatus(message);
            setJobId(job_id);
            setTrainingData(training_data);
        } catch (error) {
            setStatus('Error during retraining');
            console.error('Retraining failed', error);
        }
    };

    return (
        <DashboardLayout>
            <Typography level="h1" sx={{ mb: 2 }}>
                Retrain AI Model 🤖
            </Typography>
            <Typography sx={{ fontSize: 'lg', color: 'text.secondary', mb: 3 }}>
                Click the button below to retrain the AI model with new data.
            </Typography>

            <RetrainBox>
                <Typography>
                    {status || 'Ready for retraining...'}
                </Typography>

                {jobId && (
                    <Typography sx={{ mt: 2 }}>
                        <strong>Job ID:</strong> {jobId}
                    </Typography>
                )}

                {trainingData && (
                    <Typography sx={{ mt: 2 }}>
                        <strong>Training Data:</strong><br />
                        Yes Images: {trainingData.yes_images}<br />
                        No Images: {trainingData.no_images}
                    </Typography>
                )}
            </RetrainBox>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleRetrain}
                    disabled={status === 'Retraining in progress...'}
                >
                    Retrain Model
                </Button>
            </Box>
        </DashboardLayout>
    );
};

export default Retrain;
