import { goToSubscribe } from "../routes/coodinator"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useProtectedPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token === null) {
            goToSubscribe(navigate);
        }
    }, [navigate]);
};