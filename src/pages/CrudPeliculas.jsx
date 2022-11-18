import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';

const CrudPeliculas = () => {
  return (
    <Container>
        <h2 className='mt-2'>Administrar Películas</h2>
        <hr></hr>
        <Table striped bordered hover size="sm">
        <thead>
            <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Destacado</th>
            <th>Opciones</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
        </Table>
    </Container>
  );
};

export default CrudPeliculas;