import CrudForm from '../components/CrudForm';
import CrudTable from '../components/CrudTable';

const inicialDb = [
  {
    id: 1,
    name: "Harry Potter",
    category: "Ciencia Ficcion"
  },
  {
    id: 2,
    name: "Titanic",
    category: "Drama"
  },
  {
    id: 3,
    name: "Maverick",
    category: "Accion"
  },
  {
    id: 4,
    name: "Mi novia Polly",
    category: "Comedia"
  }
]

const CrudMovies = ({props}) => {
  // const [db, setDb] = useState([inicialDb])

  return (
    <>
      <CrudForm />
      <CrudTable />
    </>
  );
};

export default CrudMovies;