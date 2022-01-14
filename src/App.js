import './App.css';
import {Ux4iotContextProvider, useTelemetry} from "ux4iot-react";

const UX4IOT_ADMIN_CONNECTION_STRING = 'YOUR_ADMIN_CONNECTION_STRING';

const TemperatureView = props => {
    const temperature = useTelemetry('simulated-device', 'temperature');
    return <div>{temperature}</div>;
}

function App() {
    return (
        <div className="App">
            <Ux4iotContextProvider
                options={{ adminConnectionString: UX4IOT_ADMIN_CONNECTION_STRING }}
            >
                <TemperatureView />
            </Ux4iotContextProvider>
        </div>
    );
}

export default App;
