import { useLocation } from 'react-router-dom';
import { MachineInfoPage } from '../../components/MachineInfo/machineinfo';



const MachineInfo = (props) => {
    const location = useLocation();
    const { machineId, monaNumber, status, moldShots, failedShots, prodRate, prod_startDate, prod_endDate, ...others } = location.state;
    // console.log(currentMachine);
    
    return (
        <MachineInfoPage
            machineId={machineId}
            monaNumber={monaNumber}
            status= {status}
            moldShots= {moldShots}
            failedShots= {failedShots}
            prodRate= {prodRate}
            prod_startDate= {prod_startDate}
            prod_endDate= {prod_endDate}
        />
    )
}

export default MachineInfo;