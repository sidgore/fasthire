import { useState } from 'react';
import { Image, StyleSheet, Platform, ScrollView, View, Text, Animated, PanResponder, Dimensions, TouchableOpacity } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

const JOBS = [
  {
    id: 1,
    title: "Senior React Native Developer",
    company: "Tech Giants Inc",
    salary: "$120k - $150k",
    location: "Remote",
    description: "Join our dynamic team building next-gen mobile apps",
    logo: require('@/assets/images/partial-react-logo.png')
  },
  {
    id: 2,
    title: "Frontend Engineer",
    company: "StartupX",
    salary: "$90k - $110k",
    location: "New York, NY",
    description: "Creating beautiful user experiences with modern tech stack",
    logo: require('@/assets/images/partial-react-logo.png')
  },
  {
    id: 3,
    title: "Mobile Developer",
    company: "Innovation Labs",
    salary: "$100k - $130k",
    location: "San Francisco, CA",
    description: "Build the future of mobile applications",
    logo: require('@/assets/images/partial-react-logo.png')
  }
];

export default function HomeScreen() {



  const [resumeFile, setResumeFile] = useState(null);



  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/user-avatar.png')}
          style={styles.profilePicture}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.summary}>Senior Software Engineer with 5+ years of experience in mobile development</Text>
      </View>
      {/* Career Preferences */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Career Preferences</Text>
        <View style={styles.preferenceItem}>
          <Text style={styles.label}>Looking for</Text>
          <Text>Senior React Native Developer roles</Text>
        </View>
        <View style={styles.preferenceItem}>
          <Text style={styles.label}>Expected Salary</Text>
          <Text>$120k - $150k</Text>
        </View>
        <View style={styles.preferenceItem}>
          <Text style={styles.label}>Preferred Location</Text>
          <Text>Remote, United States</Text>
        </View>
      </View>
      {/* Basic Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic Details</Text>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Experience</Text>
          <Text>5 years</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Current Location</Text>
          <Text>San Francisco, CA</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Current Compensation</Text>
          <Text>$110,000/year</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Email</Text>
          <Text>john.doe@example.com</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Phone</Text>
          <Text>+1 (555) 123-4567</Text>
        </View>
      </View>
      {/* Resume Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resume</Text>
        <TouchableOpacity style={styles.uploadButton} onPress={() => console.log('Upload resume')}>
          <Text style={styles.uploadButtonText}>Upload Resume (PDF)</Text>
        </TouchableOpacity>
        {resumeFile && (
          <View style={styles.resumePreview}>
            <Text style={styles.fileName}>MyResume.pdf</Text>
            <TouchableOpacity onPress={() => setResumeFile(null)}>
              <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summary: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  section: {
    backgroundColor: 'white',
    marginTop: 15,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  preferenceItem: {
    marginBottom: 15,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  uploadButton: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  resumePreview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  fileName: {
    fontSize: 16,
  },
  removeText: {
    color: '#ff4444',
    fontSize: 16,
  }
});
