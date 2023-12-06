import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';


const ChangeCityPage = () => {
    const navigation = useNavigation(); 
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [countrySearchQuery, setCountrySearchQuery] = useState('');
  const [citySearchQuery, setCitySearchQuery] = useState('');
  useEffect(() => {
    setLoading(true);
    fetch('https://countriesnow.space/api/v0.1/countries/population/cities')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.data.map((item) => item.country));
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const handleCountryChange = async (country) => {
  setSelectedCountry(country);
  setSelectedCity('');
  setLoading(true);

  try {
    const response = await fetch('https://countriesnow.space/api/v0.1/countries/population/cities/filter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ country: country })
    });
    const data = await response.json();

    // Create a map to filter out duplicate cities
    const cityMap = new Map();
    data.data.forEach(city => cityMap.set(city.city, city));

    // Convert the map back to an array
    const uniqueCities = Array.from(cityMap.values());
    setCities(uniqueCities);
  } catch (error) {
    console.error('Error fetching cities:', error);
  } finally {
    setLoading(false);
  }
};
const filteredCountries = countries.filter(country =>
    country.toLowerCase().includes(countrySearchQuery.toLowerCase())
  );

  const filteredCities = cities.filter(city =>
    city.city.toLowerCase().includes(citySearchQuery.toLowerCase())
  );

  const handleSubmit = () => {
    // Perform any additional logic here if needed
    const navigateToScreen = (screenName) => {
        navigation.navigate('Settings');}
    navigateToScreen('Settings'); // Navigate to the Settings screen
};

  return (
    <View>
      

      {loading ? <ActivityIndicator /> : (
        <>
          <TextInput
          style={styles.searchBar}
            placeholder="Search Country"
            onChangeText={setCountrySearchQuery}
            value={countrySearchQuery}
          />

          <Picker
            selectedValue={selectedCountry}
            onValueChange={handleCountryChange}>
            {filteredCountries.map((country, index) => (
              <Picker.Item key={index} label={country} value={country} />
            ))}
          </Picker>

          <TextInput
          style={styles.searchBar}
            placeholder="Search City"
            onChangeText={setCitySearchQuery}
            value={citySearchQuery}
            editable={selectedCountry !== ''}
          />

          <Picker
            selectedValue={selectedCity}
            onValueChange={setSelectedCity}
            enabled={selectedCountry !== ''}>
            {filteredCities.map((city, index) => (
              <Picker.Item key={index} label={city.city} value={city.city} />
            ))}
          </Picker>

          <Button title="Submit" onPress={handleSubmit} />
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 20,
    },
    searchBar: {
      width: '100%', // Increase width
      height: 40, // Adjust height as needed
      borderColor: 'black',
      borderWidth: 1,
      paddingLeft: 10,
      marginBottom: 20,
    },
    // Add any additional styles you need
  });
  
  export default ChangeCityPage;