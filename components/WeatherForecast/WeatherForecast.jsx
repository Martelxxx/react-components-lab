import './WeatherForecast.css';

const WeatherForecastItems = (props) => {
    const { forecast } = props;
    return (
        <div className="weather">
  <h2>{forecast.day}</h2>
  <img src={forecast.img} alt= {forecast.imgAlt} />
  <p><span>Conditions: {forecast.conditions}</span></p>
  <p><span>Temperature: {forecast.temperature} {forecast.temperature < 80 ? '🥵' : '🥶'}</span></p>  
  <p><span>Time: {forecast.time}</span></p>
</div>
    );
};

export default WeatherForecastItems;