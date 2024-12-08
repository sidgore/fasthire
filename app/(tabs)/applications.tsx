import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const APPLIED_JOBS = [
    {
        id: 1,
        title: "Senior React Native Developer",
        company: "Tech Giants Inc",
        status: "In Review",
        appliedDate: "2024-01-15",
        logo: require('@/assets/images/partial-react-logo.png')
    },
    {
        id: 2,
        title: "Frontend Engineer",
        company: "StartupX",
        status: "Screening",
        appliedDate: "2024-01-10",
        logo: require('@/assets/images/partial-react-logo.png')
    },
    {
        id: 3,
        title: "Mobile Developer",
        company: "Innovation Labs",
        status: "Interview Scheduled",
        appliedDate: "2024-01-05",
        logo: require('@/assets/images/partial-react-logo.png')
    }
];

export default function JobsScreen() {
    const renderJobCard = ({ item }) => (
        <View style={styles.card}>
            <Image source={item.logo} style={styles.companyLogo} />
            <View style={styles.jobInfo}>
                <Text style={styles.jobTitle} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.companyName} numberOfLines={1}>{item.company}</Text>
            </View>
            <View style={styles.statusContainer}>
                <Text style={styles.statusText}>{item.status}</Text>
                <Text style={styles.dateText}>{new Date(item.appliedDate).toLocaleDateString()}</Text>
            </View>
        </View>
    );

    return (
        <FlatList
            data={APPLIED_JOBS}
            renderItem={renderJobCard}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.listContainer}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        padding: 16,
    },
    card: {
        height: 80,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        marginBottom: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    companyLogo: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    jobInfo: {
        flex: 1,
        marginLeft: 12,
        marginRight: 12,
    },
    jobTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    companyName: {
        fontSize: 14,
        color: '#666',
    },
    statusContainer: {
        alignItems: 'flex-end',
    },
    statusText: {
        fontSize: 12,
        color: '#4A90E2',
        fontWeight: '500',
    },
    dateText: {
        fontSize: 12,
        color: '#999',
        marginTop: 4,
    }
});
