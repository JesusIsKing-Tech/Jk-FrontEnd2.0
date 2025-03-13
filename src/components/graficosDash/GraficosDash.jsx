// Importing recharts components for the chart rendering
import { ResponsiveContainer, BarChart, LineChart, XAxis, YAxis, Tooltip, Bar, Line } from "recharts";

// Importing your styled components
import { ChartCard, TableCard, TableStyled, HeaderFamilia, BoxTroca, ChartsContainer, BoxFiltro } from "./styleCardGraficosDash";

// Importing your filtering component
import Filtro from "../../components/filtroDash/FiltroDash";

// Assuming registrations, donations, families are coming from data or similar source
// import { registrations, donations, families } from your_data_source;

function GraficosDash() {

    const registrations = [
        { month: 'Jan', value: 30 },
        { month: 'Feb', value: 20 },
        { month: 'Mar', value: 27 },
        // Add more months as needed
      ];
      
      const donations = [
        { month: 'Jan', value: 50 },
        { month: 'Feb', value: 45 },
        { month: 'Mar', value: 60 },
        // Add more months as needed
      ];
      
      const families = [
        { name: 'Silva', address: 'Rua A, 123', lastDonation: '2023-03-12', donations: 5, members: 4 },
        { name: 'Santos', address: 'Av. B, 456', lastDonation: '2023-03-15', donations: 3, members: 3 },
        // Add more family records as needed
      ];
    return (
        <>
            <BoxTroca>
            <BoxFiltro style={{marginBottom:"10px"}}>
          <Filtro texto={"Filtrar Data"} />
        </BoxFiltro>
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

                <BoxFiltro>
                    <Filtro texto={"Filtrar Famílias"} />
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
                            {families.map((family, index) => (
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