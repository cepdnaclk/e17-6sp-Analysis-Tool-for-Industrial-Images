import { useRouter } from 'next/router';
import { MachineInfoPage } from '../../components/MachineInfo/machineInfo';

const machineData = [
    {
        machineId : '001',
        monaNumber : '52078592',
        status : 'Online',
        moldDShots : '10',
        failedShots : '0',
        prodRate : '100%',
        prod_startDate : '01/01/2020',
        prod_endDate : '01/01/2022',
    },
    {
        machineId : '002',
        monaNumber : '82525425',
        status : 'Online',
        moldDShots : '10',
        failedShots : '0',
        prodRate : '100%',
        prod_startDate : '01/01/2020',
        prod_endDate : '01/01/2022',
    },
    {
        machineId : '003',
        monaNumber : '35636356',
        status : 'Offline',
        moldDShots : '10',
        failedShots : '0',
        prodRate : '100%',
        prod_startDate : '01/01/2020',
        prod_endDate : '01/01/2022',
    },
]

const MachineInfo = () => {
    const router = useRouter();
    const currMachine = machineData.find(machine => machine.machineId === router.query.machineInfo);
    // console.log(currMachine);
  return (
    <MachineInfoPage
        machineId={currMachine.machineId}
        monaNumber={currMachine.monaNumber}
        status={currMachine.status}
        moldShots={currMachine.moldDShots}
        failedShots={currMachine.failedShots}
        prodRate={currMachine.prodRate}
        prod_startDate={currMachine.prod_startDate}
        prod_endDate={currMachine.prod_endDate}
        />
  );
}

export default MachineInfo;