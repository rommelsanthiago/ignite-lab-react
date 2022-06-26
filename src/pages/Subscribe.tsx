import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscribeMutation } from "../graphql/generated";
import code_mockup from "../assets/code-mockup.png";
import { goToEvent } from "../routes/coodinator";
import { Footer } from "../components/Footer";

export function Subscribe() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [ createSubscriber, { loading } ] = useCreateSubscribeMutation();

    function handleSubscribe(event: FormEvent) {
        event.preventDefault();
        
        createSubscriber({
            variables: {
                name,
                email,
            }
        }).then((res) => {
            let token = res.data?.createSubscriber?.id as string
            localStorage.setItem("token", token)
            goToEvent(navigate);
        });
    };

    return (
        <div className="flex justify-between min-h-screen bg-blur bg-cover bg-no-repeat flex-col items-center before:content-[''] before:absolute before:w-full before:h-[100vh] before:bg-no-repeat before:bg-top before:bg-react before:mt-2.5">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto sm:flex sm:flex-col">
                <div className="max-w-[640px] sm:flex sm:flex-col sm:items-center sm:p-8 sm:text-center">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong></h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</p>
                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 rounded sm:w-full">
                    <strong className="text-2xl mt-6 block">Inscreva-se gratuitamente</strong>
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input 
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text" 
                            placeholder="Seu nome completo"
                            onChange={event => setName(event.target.value)}
                        />
                        <input 
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email" 
                            placeholder="Digite seu e-mail"
                            onChange={event => setEmail(event.target.value)}
                        />
                        <button
                            disabled={loading}
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50" 
                            type="submit">
                            Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>
            <img src={code_mockup} className="mt-10" alt=""/>
            <Footer />
        </div>
    );
};
