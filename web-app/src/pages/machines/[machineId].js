import { useRouter } from 'next/router';
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

export const getStaticPaths = async () => {
    const paths = machineData.map(machine => ({
        params: { machineId: machine.machineId.toString() },
    }));
    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
    const machineID = context.params.machineId;
    const machineInfo = machineData.find(machine => machine.machineId === machineID);
    return { props: { machineInfo } };
};

const MachineInfo = ({machineInfo}) => {
    const currentMachine = machineInfo;
    
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