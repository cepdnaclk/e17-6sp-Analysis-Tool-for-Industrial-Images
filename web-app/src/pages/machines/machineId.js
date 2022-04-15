import { useParams } from 'react-router-dom';
import { MachineInfoPage } from '../../components/MachineInfo/machineinfo';
import React, { useState,useEffect } from 'react';
import Axios from 'axios';

//const machineData =  [
    //{
        //machineId : '001',
        //monaNumber : '52078592',
        //status : 'Online',
        //moldShots : 10,
        //failedShots : 0,
        //prodRate : 56,
        //prod_startDate : '01/01/2020',
        //prod_endDate : '01/01/2022',
    //},
    //{
        //machineId : '002',
        //monaNumber : '82525425',
        //status : 'Online',
        //moldShots : 20,
        //failedShots : 1,
        //prodRate : 45,
        //prod_startDate : '01/01/2020',
        //prod_endDate : '01/01/2022',
    //},
    //{
        //machineId : '003',
        //monaNumber : '35636356',
        //status : 'Offline',
        //moldShots : 30,
        //failedShots : 3,
        //prodRate : 34,
        //prod_startDate : '01/01/2020',
        //prod_endDate : '01/01/2022',
    //},
//]


const MachineInfo = ({machineInfo}) => {


	const [machineData, setMachineData] = useState([])

	//useEffect(() => {
		//document.title = 'Dashboard';
	//}, [props.title]);

	useEffect(()=>{
		Axios.get('http://localhost:3001/api/machines').then((response)=>{
			setMachineData(response.data);
			console.log(machineData);
		})
	})

    const { ID } = useParams();
    const currentMachine = machineData.find(machine => machine.machineID === ID);
    //console.log(machineData);
    
    return (
	    <MachineInfoPage
	    machineId={currentMachine.machineID}
	    monaNumber={currentMachine.monaID}
	    status="online"
	    moldShots={currentMachine.moldShots}
	    failedShots={currentMachine.failedShots}
	    prodRate={currentMachine.prodRate}
	    prod_startDate={currentMachine.prod_start_date}
	    prod_endDate={currentMachine.prod_end_date}
	    />
    )
}

export default MachineInfo;
