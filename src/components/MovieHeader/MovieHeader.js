import './MovieHeader.css'
import { Header, Button } from "semantic-ui-react";

const MovieHeader = ({setModalOpen}) => {
  return (
    <Header as="h1" className="header">
      <Button onClick={() => setModalOpen(true)} primary floated="right">
        Add Movie
      </Button>
    </Header>
  );
};

export default MovieHeader;
