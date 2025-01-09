import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wind, Sun, Waves, Factory, Battery, CloudRain } from 'lucide-react';
import ReactApexChart from 'react-apexcharts';

const mockData = {
    hourlyGeneration: Array.from({ length: 24 }, (_, i) => ({
        hour: i,
        solar: Math.sin(i * Math.PI / 12) * 400 + Math.random() * 50,
        wind: 200 + Math.random() * 150,
        hydro: 300 + Math.random() * 100,
        thermal: 500 + Math.random() * 50
    })),
    weather: {
        temperature: 28,
        windSpeed: 15,
        humidity: 65,
        cloudCover: 30
    }
};

const WeatherGauge = ({ value, max, title, icon: Icon }) => (

    <div className="flex flex-col items-center p-4 bg-slate-800 rounded-lg">
        <Icon className="w-6 h-6 mb-2 text-blue-400" />
        <div className="text-lg font-semibold">{title}</div>
        <div className="w-full h-2 bg-slate-700 rounded-full mt-2">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(value / max) * 100}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-blue-500 rounded-full"
            />
        </div>
        <div className="mt-1 text-sm">{value}/{max}</div>
    </div>
);

const CircularProgress = ({ value, max, title, color }) => {
    const percentage = (value / max) * 100;
    const circumference = 2 * Math.PI * 40;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex flex-col items-center">
            <div className="relative">
                <svg width="100" height="100">
                    <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#1f2937"
                        strokeWidth="8"
                        fill="none"
                    />
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke={color}
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1 }}
                        transform="rotate(-90 50 50)"
                    />
                    <text
                        x="50"
                        y="50"
                        textAnchor="middle"
                        dy="0.3em"
                        className="text-xl font-bold"
                        fill="white"
                    >
                        {Math.round(percentage)}%
                    </text>
                </svg>
            </div>
            <div className="mt-2 text-center">{title}</div>
        </div>
    );
};

const HourlyBarChart = ({ data }) => {
    const maxValue = Math.max(...data.map(d => Math.max(d.solar, d.wind, d.hydro, d.thermal)));

    return (
        <div className="h-64 flex items-end space-x-2">
            {data.map((hour, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end space-y-1">
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${(hour.solar / maxValue) * 100}%` }}
                        className="bg-yellow-500/70 rounded-t"
                    />
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${(hour.wind / maxValue) * 100}%` }}
                        className="bg-blue-500/70 rounded-t"
                    />
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${(hour.hydro / maxValue) * 100}%` }}
                        className="bg-green-500/70 rounded-t"
                    />
                    <div className="text-xs text-center">{hour.hour}h</div>
                </div>
            ))}
        </div>
    );
};

export const GenerateEnergy = () => {
    const [selectedView, setSelectedView] = useState('overview');
    const lineChartOptions = {
        chart: {
            id: 'hourly-generation',
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: mockData.hourlyGeneration.map((d) => `${d.hour}:00`),
        },
        stroke: {
            curve: 'smooth',
        },
        colors: ['#f59e0b', '#3b82f6', '#22c55e', '#ef4444'],
        legend: {
            position: 'top',
        },
    };

    const lineChartSeries = [
        {
            name: 'Solar',
            data: mockData.hourlyGeneration.map((d) => d.solar),
        },
        {
            name: 'Wind',
            data: mockData.hourlyGeneration.map((d) => d.wind),
        },
        {
            name: 'Hydro',
            data: mockData.hourlyGeneration.map((d) => d.hydro),
        },
        {
            name: 'Thermal',
            data: mockData.hourlyGeneration.map((d) => d.thermal),
        },
    ];

    const pieChartOptions = {
        labels: ['Solar', 'Wind', 'Hydro', 'Thermal'],
        colors: ['#f59e0b', '#3b82f6', '#22c55e', '#ef4444'],
    };

    const pieChartSeries = [
        mockData.hourlyGeneration.reduce((sum, d) => sum + d.solar, 0),
        mockData.hourlyGeneration.reduce((sum, d) => sum + d.wind, 0),
        mockData.hourlyGeneration.reduce((sum, d) => sum + d.hydro, 0),
        mockData.hourlyGeneration.reduce((sum, d) => sum + d.thermal, 0),
    ];
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 p-6">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Power Generation Dashboard
                    </h1>
                    <select
                        value={selectedView}
                        onChange={(e) => setSelectedView(e.target.value)}
                        className="bg-slate-800 text-slate-100 p-2 rounded-lg border border-slate-700"
                    >
                        <option value="overview">Overview</option>
                        <option value="weather">Weather Impact</option>
                        <option value="efficiency">Efficiency Metrics</option>
                    </select>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Line Chart */}
                    <div className="bg-slate-800 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Hourly Generation</h2>
                        <ReactApexChart
                            options={lineChartOptions}
                            series={lineChartSeries}
                            type="line"
                            height={300}
                        />
                    </div>

                    {/* Pie Chart */}
                    <div className="bg-slate-800 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Total Generation</h2>
                        <ReactApexChart
                            options={pieChartOptions}
                            series={pieChartSeries}
                            type="pie"
                            height={300}
                        />
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Live Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <CircularProgress value={85} max={100} title="Solar Efficiency" color="#eab308" />
                    <CircularProgress value={78} max={100} title="Wind Efficiency" color="#3b82f6" />
                    <CircularProgress value={92} max={100} title="Hydro Efficiency" color="#22c55e" />
                    <CircularProgress value={65} max={100} title="Thermal Efficiency" color="#ef4444" />
                </div>

                {/* Weather Conditions */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <WeatherGauge value={mockData.weather.temperature} max={50} title="Temperature" icon={Sun} />
                    <WeatherGauge value={mockData.weather.windSpeed} max={30} title="Wind Speed" icon={Wind} />
                    <WeatherGauge value={mockData.weather.humidity} max={100} title="Humidity" icon={CloudRain} />
                    <WeatherGauge value={mockData.weather.cloudCover} max={100} title="Cloud Cover" icon={Battery} />
                </div>

                {/* Hourly Generation */}
                <div className="bg-slate-800 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Hourly Generation</h2>
                    <HourlyBarChart data={mockData.hourlyGeneration} />
                </div>

                {/* Plant Status Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['Solar', 'Wind', 'Hydro'].map((plant, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            className="bg-slate-800 p-6 rounded-lg"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold">{plant} Plant</h3>
                                <div className="h-3 w-3 rounded-full bg-green-500" />
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span>Current Output</span>
                                    <span className="font-semibold">{Math.floor(Math.random() * 500 + 500)} MW</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Efficiency</span>
                                    <span className="font-semibold">{Math.floor(Math.random() * 20 + 80)}%</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Status</span>
                                    <span className="text-green-400">Operational</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GenerateEnergy;