import { useState } from 'react';
import { Image, StyleSheet, Platform, ScrollView, View, Text, Animated, PanResponder, Dimensions } from 'react-native';

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
  const position = new Animated.ValueXY();
  const [currentIndex, setCurrentIndex] = useState(0);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      position.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: (_, gesture) => {
      if (gesture.dx > SWIPE_THRESHOLD) {
        forceSwipe('right');
      } else if (gesture.dx < -SWIPE_THRESHOLD) {
        forceSwipe('left');
      } else {
        resetPosition();
      }
    }
  });

  const forceSwipe = (direction) => {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION,
      useNativeDriver: false
    }).start(() => onSwipeComplete(direction));
  };

  const onSwipeComplete = (direction) => {
    const item = JOBS[currentIndex];
    direction === 'right' ? console.log('Applied to:', item.title) : console.log('Skipped:', item.title);
    position.setValue({ x: 0, y: 0 });
    setCurrentIndex(currentIndex + 1);
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false
    }).start();
  };

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    };
  };

  const renderCard = () => {
    if (currentIndex >= JOBS.length) {
      return (
        <View style={styles.noMoreCards}>
          <Text style={styles.noMoreCardsText}>No More Jobs!</Text>
        </View>
      );
    }

    const job = JOBS[currentIndex];
    return (
      <Animated.View
        style={[getCardStyle(), styles.cardStyle]}
        {...panResponder.panHandlers}
      >
        <View style={styles.card}>
          <Image source={job.logo} style={styles.logo} />
          <Text style={styles.title}>{job.title}</Text>
          <Text style={styles.company}>{job.company}</Text>
          <Text style={styles.salary}>{job.salary}</Text>
          <Text style={styles.location}>{job.location}</Text>
          <Text style={styles.description}>{job.description}</Text>
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      {renderCard()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    marginTop: 100
  },
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  company: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
  },
  salary: {
    fontSize: 20,
    color: '#4A90E2',
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },
  noMoreCards: {
    padding: 20,
    alignItems: 'center',
  },
  noMoreCardsText: {
    fontSize: 20,
    color: '#666',
  }
});
