import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Box from '@mui/material/Box';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/material/Grid';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, LineChart, Line } from 'recharts';

// Demo Data
const classDistributionData = [
    { name: 'Tumor', value: 60 },
    { name: 'No Tumor', value: 40 }
];

const sampleCountData = [
    { name: 'Tumor', samples: 300 },
    { name: 'No Tumor', samples: 200 }
];

const accuracyTrendData = [
    { epoch: 1, accuracy: 75 },
    { epoch: 2, accuracy: 80 },
    { epoch: 3, accuracy: 85 },
    { epoch: 4, accuracy: 87 },
    { epoch: 5, accuracy: 90 }
];

const lossTrendData = [
    { epoch: 1, loss: 0.5 },
    { epoch: 2, loss: 0.4 },
    { epoch: 3, loss: 0.35 },
    { epoch: 4, loss: 0.3 },
    { epoch: 5, loss: 0.25 }
];

const COLORS = ['#ff6384', '#36a2eb'];

const Visualization: React.FC = () => {
    return (
        <DashboardLayout>
            <Typography level="h1" sx={{ mb: 2 }}>
                Data Visualizations 📊
            </Typography>
            <Typography sx={{ fontSize: 'lg', color: 'text.secondary', mb: 3 }}>
                Below are some visual representations of the dataset used for brain tumor detection.
            </Typography>

            <Grid container spacing={3}>
                {/* Class Distribution Pie Chart */}
                <Grid item xs={12} md={6}>
                    <Box display="flex" justifyContent="center" border={1} borderRadius={2} p={2}>
                        <PieChart width={300} height={300}>
                            <Pie data={classDistributionData} dataKey="value" cx="50%" cy="50%" outerRadius={100} label>
                                {classDistributionData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </Box>
                </Grid>

                {/* Sample Count Bar Chart */}
                <Grid item xs={12} md={6}>
                    <Box display="flex" justifyContent="center" border={1} borderRadius={2} p={2}>
                        <BarChart width={400} height={300} data={sampleCountData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="samples" fill="#1976d2" />
                        </BarChart>
                    </Box>
                </Grid>

                {/* Model Accuracy Trend Line Chart */}
                <Grid item xs={12} md={6}>
                    <Box display="flex" justifyContent="center" border={1} borderRadius={2} p={2}>
                        <LineChart width={400} height={300} data={accuracyTrendData}>
                            <XAxis dataKey="epoch" />
                            <YAxis domain={[70, 100]} />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="accuracy" stroke="#4caf50" strokeWidth={2} />
                        </LineChart>
                    </Box>
                </Grid>

                {/* Model Loss Trend Line Chart */}
                <Grid item xs={12} md={6}>
                    <Box display="flex" justifyContent="center" border={1} borderRadius={2} p={2}>
                        <LineChart width={400} height={300} data={lossTrendData}>
                            <XAxis dataKey="epoch" />
                            <YAxis domain={[0, 1]} />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="loss" stroke="#ff9800" strokeWidth={2} />
                        </LineChart>
                    </Box>
                </Grid>
            </Grid>
        </DashboardLayout>
    );
};

export default Visualization;