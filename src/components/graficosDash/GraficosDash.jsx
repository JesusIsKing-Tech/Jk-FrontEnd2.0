import { useState } from "react";

// Importing recharts components for the chart rendering
import { ResponsiveContainer, BarChart, LineChart, XAxis, YAxis, Tooltip, Bar, Line } from "recharts";

// Importing your styled components
import { ChartCard, TableCard, TableStyled, HeaderFamilia, BoxTroca, ChartsContainer, BoxFiltro } from "./styleCardGraficosDash";

// Importing your filtering component
import Filtro from "../../components/filtroDash/FiltroDash";

function GraficosDash() {
    const [sortType, setSortType] = useState("name"); // Estado para filtro de famílias

    const registrations = [
        { month: 'Jan', value: 12 },
        { month: 'Fev', value: 20 },
        { month: 'Mar', value: 16 },
        { month: 'Abr', value: 27 },
        // Adicione mais meses se precisar
    ];

    const donations = [
        { month: 'Jan', value: 10 },
        { month: 'Fev', value: 45 },
        { month: 'Mar', value: 30 },
        { month: 'Abr', value: 50 },
        // Adicione mais meses se precisar
    ];

    const families = [
        { name: 'Silva', address: 'Rua A, 123', lastDonation: '2024-12-10', donations: 7, members: 2 },
        { name: 'Oliveira', address: 'Rua B, 456', lastDonation: '2024-11-20', donations: 2, members: 5 },
        { name: 'Costa', address: 'Av. Central, 789', lastDonation: '2025-01-15', donations: 5, members: 3 },
        { name: 'Souza', address: 'Rua das Flores, 101', lastDonation: '2024-10-25', donations: 9, members: 4 },
        { name: 'Almeida', address: 'Rua Nova, 202', lastDonation: '2025-02-05', donations: 1, members: 1 },
        { name: 'Pereira', address: 'Av. Brasil, 303', lastDonation: '2024-09-18', donations: 6, members: 2 },
        { name: 'Gomes', address: 'Rua X, 404', lastDonation: '2024-08-30', donations: 3, members: 6 },
        { name: 'Ferreira', address: 'Travessa Y, 505', lastDonation: '2025-03-01', donations: 4, members: 2 },
        { name: 'Rodrigues', address: 'Alameda Z, 606', lastDonation: '2024-07-22', donations: 8, members: 5 },
        { name: 'Martins', address: 'Rua Velha, 707', lastDonation: '2024-06-12', donations: 2, members: 3 },
    ];

    // Ordenando famílias baseado no filtro selecionado
    const sortedFamilies = [...families].sort((a, b) => {
        if (sortType === "name") {
            return a.name.localeCompare(b.name); // Alfabético A-Z
        } else if (sortType === "donations") {
            return b.donations - a.donations; // Mais doações primeiro
        } else if (sortType === "members") {
            return b.members - a.members; // Mais integrantes primeiro
        } else {
            return 0;
        }
    });

    return (
        <>
            <BoxTroca>
                {/* <BoxFiltro style={{ marginBottom: "10px" }}>
                    <Filtro texto={"Filtrar Data"} />
                </BoxFiltro> */}

                <ChartsContainer>
                    <ChartCard>
                        <h3>TOTAL DE USUÁRIOS CADASTRADOS</h3>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={registrations}>
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#2563eb" />
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    <ChartCard>
                        <h3>TOTAL DE DOAÇÕES</h3>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={donations}>
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </ChartCard>
                </ChartsContainer>

                <BoxFiltro style={{ margin: "20px 0" }}>
                    {/* Novo filtro de famílias */}
                    <select 
                        onChange={(e) => setSortType(e.target.value)} 
                        value={sortType}
                        style={{
                            padding: "8px",
                            borderRadius: "8px",
                            fontSize: "16px",
                            border: "1px solid #ccc",
                            backgroundColor: "#f9fafb",
                            color: "#333",
                            outline: "none",
                        }}
                    >
                        <option value="name">Ordenar por Nome</option>
                        <option value="donations">Ordenar por Doações</option>
                        <option value="members">Ordenar por Integrantes</option>
                    </select>
                </BoxFiltro>

                <HeaderFamilia>
                    <h3>Famílias</h3>
                </HeaderFamilia>

                <TableCard>
                    <TableStyled>
                        <thead>
                            <tr>
                                <th>Nome família</th>
                                <th>Endereço</th>
                                <th>Última doação</th>
                                <th>Doações</th>
                                <th>Integrantes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedFamilies.map((family, index) => (
                                <tr key={index}>
                                    <td>{family.name}</td>
                                    <td>{family.address}</td>
                                    <td>{family.lastDonation}</td>
                                    <td>{family.donations}</td>
                                    <td>{family.members}</td>
                                </tr>
                            ))}
                        </tbody>
                    </TableStyled>
                </TableCard>
            </BoxTroca>
        </>
    );
}

export default GraficosDash;
