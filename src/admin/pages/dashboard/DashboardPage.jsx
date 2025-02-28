import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  Filler,
} from 'chart.js';
import { Bar, Line, Pie } from "react-chartjs-2";
import { Breadcrumb } from "../../../ui/components/Breadcrumb";
import { Widget } from "../../components/Widget";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: 'Mes',
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: 'Recolección',
      },
    },
  },
}

const dataLine = {
  labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
  datasets: [
    {
      label: "Galpón 1",
      data: [450, 424, 438, 440, 445, 455, 450],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
    },
    {
      label: "Galpón 2",
      data: [420, 428, 438, 440, 435, 435, 445],
      borderColor: "rgba(153, 102, 255, 1)",
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      fill: true,
    },
  ],
};

const dataBar = {
  labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

const dataPie = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

export const DashboardPage = () => {
  return (
    <>
      <Breadcrumb breadCrumb="Dashboard" />
      <div className="row">
        <Widget
          title="Total Huevos"
          icon="fa-egg"
          progressData="97%"
          subicon="fa-arrow-up"
          subValue="2.8%"
          itemValue="13.500"
          cardClassName="l-bg-cherry"
          pgsClassName="l-bg-cyan"
        />
        <Widget
          title="Total Ventas"
          icon="fa-hand-holding-dollar"
          subicon="fa-arrow-down"
          progressData="75%"
          subValue="1.7%"
          itemValue="$9.865.000"
          cardClassName="l-bg-green-dark"
          pgsClassName="l-bg-green"
        />
        <Widget
          title="Total Canastas"
          icon="fa-basket-shopping"
          subicon="fa-arrow-up"
          progressData="75%"
          subValue="1.7%"
          itemValue="450"
          cardClassName="l-bg-orange-dark"
          pgsClassName="l-bg-orange"
        />
        <Widget
          title="Total Costos"
          icon="fa-sack-dollar"
          subicon="fa-arrow-up"
          progressData="68%"
          subValue="3%"
          itemValue="$2.500.500"
          cardClassName="l-bg-blue-dark"
          pgsClassName="l-bg-blue"
        />
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <Line options={options} data={dataLine} />
        </div>
        <div className="col-sm-12 col-md-6">
          <Bar options={options} data={dataBar} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <Pie data={dataPie} />
        </div>
        <div className="col-sm-12 col-md-6">
          <Pie data={dataPie} />
        </div>
      </div>
    </>
  );
};
