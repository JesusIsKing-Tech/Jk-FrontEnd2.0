import { StatCard, StatCardSelect } from "./styleKpis";

function Kpis({ title, estado, onClick }) { 
    return (
        <>
            {estado ? (
                <StatCardSelect onClick={onClick}>
                    <h3>{title}</h3>
                </StatCardSelect>
            ) : (
                <StatCard onClick={onClick}>
                    <h3>{title}</h3>
                </StatCard>
            )}
            </>
    );
}

export default Kpis;