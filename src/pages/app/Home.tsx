import Box from '@mui/material/Box';
import Typography from '@mui/joy/Typography';
import DashboardLayout from '../layouts/DashboardLayout';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Home: React.FC = () => {
  return (
    <DashboardLayout>
      {/* Title */}
      <Typography
        level="h1"
        sx={{
          mb: 4,
          fontWeight: 600,
          fontSize: '2.5rem',
        }}
      >
        Brain Tumor Detection 🧠
      </Typography>

      {/* Image */}
      <Box
        component="img"
        src="https://storage.googleapis.com/kaggle-datasets-images/1608934/2645886/44583c7826d1bdea68598f0eef8e6cfc/dataset-cover.jpg?t=2021-09-25-22-03-08"
        width="100%"
        height="auto"
        maxHeight="400px"
        sx={{
          objectFit: 'cover',
          objectPosition: 'center',
          borderRadius: '16px',
          boxShadow: 4,
          mb: 3,
        }}
      />

      {/* Problem Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          level="h2"
          sx={{
            mb: 2,
            fontWeight: 500,
          }}
        >
          The Problem 🧑‍⚕️
        </Typography>
        <Typography
          sx={{
            fontSize: 'lg',
            color: 'text.secondary',
            lineHeight: 1.7,
          }}
        >
          Brain tumors are one of the most critical health conditions, and early detection is crucial for effective treatment. Traditional methods, such as MRI scans interpreted by radiologists, can be slow and prone to human error. Misdiagnosis can delay treatment and negatively affect patient outcomes.
        </Typography>
        <Typography
          sx={{
            mt: 2,
            fontSize: 'lg',
            color: 'text.secondary',
            lineHeight: 1.7,
          }}
        >
          The challenge is automating the detection of brain tumors (tumor vs. non-tumor) from MRI images with high accuracy. This can significantly assist healthcare professionals in making faster, more reliable decisions, especially when faced with large volumes of scans.
        </Typography>
      </Box>

      {/* Solution Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          level="h2"
          sx={{
            mb: 2,
            fontWeight: 500,
          }}
        >
          Our Solution 💡
        </Typography>
        <Typography
          sx={{
            fontSize: 'lg',
            color: 'text.secondary',
            lineHeight: 1.7,
          }}
        >
          We propose a deep learning solution that automates the detection of brain tumors in MRI images, classifying them into two categories: tumor and non-tumor. By leveraging a Convolutional Neural Network (CNN), this model learns to identify tumors with high accuracy, reducing human error and speeding up diagnosis.
        </Typography>
        <Typography
          sx={{
            mt: 2,
            fontSize: 'lg',
            color: 'text.secondary',
            lineHeight: 1.7,
            fontWeight: 500,
          }}
        >
          Key Benefits:
        </Typography>
        <List
          sx={{
            mb: 3,
            paddingLeft: 2,
            paddingRight: 2,
            paddingTop: 0,
            paddingBottom: 0,
            listStyleType: 'disc',
            listStylePosition: 'inside',
          }}
        >
          <ListItem>
            <Typography sx={{ fontSize: 'lg' }}>
              🚀 Automate the tumor detection process to enhance efficiency.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography sx={{ fontSize: 'lg' }}>
              🔍 Improve accuracy, minimizing human errors in diagnosis.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography sx={{ fontSize: 'lg' }}>
              ⏱️ Provide faster diagnoses, enabling timely treatment decisions.
            </Typography>
          </ListItem>
        </List>
      </Box>

      {/* About the Dataset Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          level="h2"
          sx={{
            mt: -2,
            mb: 2,
            fontWeight: 500,
          }}
        >
          About the Dataset 📊
        </Typography>
        <Typography
          sx={{
            fontSize: 'lg',
            color: 'text.secondary',
            lineHeight: 1.7,
          }}
        >
          The dataset consists of MRI images, labeled as "tumor" or "non-tumor," which makes it perfect for training our model. Each image is carefully annotated to ensure accurate learning and validation. By using this data, our model can differentiate between images with tumors and those without.
        </Typography>
        <Typography
          sx={{
            mt: 2,
            fontSize: 'lg',
            color: 'text.secondary',
            lineHeight: 1.7,
          }}
        >
          The dataset's variety and richness ensure that the model can generalize well to unseen data, providing reliable predictions for real-world applications.
        </Typography>
      </Box>

      {/* About the Author Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          level="h2"
          sx={{
            mb: 2,
            fontWeight: 500,
          }}
        >
          About the Author ✨
        </Typography>
        <Typography
          sx={{
            fontSize: 'lg',
            color: 'text.secondary',
            lineHeight: 1.7,
          }}
        >
          This project was developed by Ronald Abimbola, a Machine Learning Engineer passionate about leveraging AI for healthcare improvements. With expertise in machine learning, I aim to build impactful solutions that assist medical professionals and improve patient outcomes.
        </Typography>
      </Box>
    </DashboardLayout>
  );
};

export default Home;
