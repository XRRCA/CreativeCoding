import requests

def get_current_weather(api_key, location):
    base_url = "http://api.openweathermap.org/data/2.5/weather"
    url = f"{base_url}?q={location}&appid={api_key}&units=metric"

    try:
        response = requests.get(url)
        response.raise_for_status()
        weather_data = response.json()
        return weather_data
    except requests.RequestException as e:
        return f"An error occurred: {e}"

def main():
    api_key = '3f36a008bba9d213f7a6e6101f6588c1'  # Replace with your OpenWeatherMap API key
    location = 'London'     # Replace with the desired location
    weather_data = get_current_weather(api_key, location)

    if isinstance(weather_data, dict):
        print(f"Weather in {location}:")
        print(f"Temperature: {weather_data['main']['temp']}°C")
        print(f"Weather: {weather_data['weather'][0]['description']}")
        print(f"Wind Speed: {weather_data['wind']['speed']} m/s")
    else:
        print(weather_data)

if __name__ == "__main__":
    main()

