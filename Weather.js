import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Haze",
        subtitle: "Just don't go outside or wear a mask"
    },

    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
    },

    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "ls like rain, like a spray"

    },

    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Rain",
        subtitle: "Don't go outside"
    },

    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Snow",
        subtitle: "I like snow, do you?"
    },

    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subtitle: "wear a mask"
    },

    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Clear",
        subtitle: "It's a good day to do the laundry"
    },

    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Cloud",
        subtitle: "need sunlight🌞"
    },

    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist",
        subtitle: "Mist it self is good for your skin but don't go outside"
    },

    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dust",
        subtitle: "NOoo... 😭"
    }
};


export default function Weather({temp, condition}){
    return (
            <LinearGradient
                colors={weatherOptions[condition].gradient}
                style={styles.container}
            >

            <StatusBar barStyle="light-content"/>
            
            <View style={styles.halfContainer}>
            <MaterialCommunityIcons 
                size={96} 
                name={weatherOptions[condition].iconName}                
                color="white" 
            /> 
            <Text style={styles.temp}>{temp}°C</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
            </LinearGradient>
            
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere",  
        "Clear", 
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    temp: {
        fontSize: 42,
        color: "white"
    },

    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },

    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10

    },

    subtitle: {
        fontWeight: "600",
        fontSize: 24,
        color: "white",
        textAlign: "left"
    },

    textContainer: {
        alignItems: "flex-start"
    }
    
});