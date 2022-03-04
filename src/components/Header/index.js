import { Nav } from 'react-bootstrap';

const Header = () => {
  const handleSelect = (eventKey) => console.log(`selected ${eventKey}`);
  return (
    <div className="container header-container">
      <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link eventKey="1" href="#/home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="1" href="#/guides">
            Guides
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default Header
