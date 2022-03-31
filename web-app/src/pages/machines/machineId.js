import { useParams } from 'react-router-dom';
import { MachineInfoPage } from '../../components/MachineInfo/machineinfo';

const machineData =  [
    {
        machineId : '001',
        monaNumber : '52078592',
        status : 'Online',
        moldShots : 10,
        failedShots : 0,
        prodRate : 56,
        prod_startDate : '01/01/2020',
        prod_endDate : '01/01/2022',
    },
    {
        machineId : '002',
        monaNumber : '82525425',
        status : 'Online',
        moldShots : 20,
        failedShots : 1,
        prodRate : 45,
        prod_startDate : '01/01/2020',
        prod_endDate : '01/01/2022',
    },
    {
        machineId : '003',
        monaNumber : '35636356',
        status : 'Offline',
        moldShots : 30,
        failedShots : 3,
        prodRate : 34,
        prod_startDate : '01/01/2020',
        prod_endDate : '01/01/2022',
    },
]


const MachineInfo = ({machineInfo}) => {
    const { ID } = useParams();
    const currentMachine = machineData.find(machine => machine.machineId === ID);
    // console.log(currentMachine);
    
    return (
        <MachineInfoPage
            machineId={currentMachine.machineId}
            monaNumber={currentMachine.monaNumber}
            status={currentMachine.status}
            moldShots={currentMachine.moldShots}
            failedShots={currentMachine.failedShots}
            prodRate={currentMachine.prodRate}
            prod_startDate={currentMachine.prod_startDate}
            prod_endDate={currentMachine.prod_endDate}
        />
    )
}

export default MachineInfo;