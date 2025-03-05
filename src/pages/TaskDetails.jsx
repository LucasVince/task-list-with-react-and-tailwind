import {ChevronLeft} from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const TaskDetails = () => {
    const [searchParams] =  useSearchParams();

    const title = searchParams.get('title');
    const description = searchParams.get('description');
    const completed = searchParams.get('completed');

    const navigate = useNavigate();

    const onGoBackClick = () => {
        navigate('/');
    }

    return(
        <div className="w-screen h-screen bg-slate-500 flex justify-center text-white">
            <div className="w-[500px] flex flex-col items-center m-5 gap-5">
                <div className="flex item-center">
                    <button className="-translate-x-[110px] p-1 rounded-md flex justify-center items-center hover:bg-slate-600" onClick={() => {
                        onGoBackClick();
                    }}>
                        <ChevronLeft />
                    </button>
                    <h1 className="text-3xl text-center font-bold">
                        Detalhes da tarefa
                    </h1>
                </div>
                <div className="bg-slate-300 w-full p-6 rounded-md flex flex-col items-center gap-10">
                    <h1 className="text-slate-500 text-3xl font-bold">{title}</h1>
                    <p className="text-slate-500 font-semibold text-md">{description}</p>
                    <p className={`${completed == 'true' ? 'text-green-500' : 'text-red-600'} font-semibold text-md`}>{completed == 'true' ? 'completo' : 'incopleto'}</p>
                </div>
            </div>
        </div>
    );
}

export default TaskDetails;