import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Box from '@mui/material/Box';
import Typography from '@mui/joy/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const RetrainBox = styled(Box)(() => ({
    border: '2px dashed #1976d2',
    borderRadius: '8px',
    width: '100%',
    height: '200px',
    display: 'flex',
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

    const handleRetrain = () => {
        setStatus('Retraining in progress...');

        setTimeout(() => {
            setStatus('Retraining completed successfully!');
        }, 3000); // Simulating retraining process
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
