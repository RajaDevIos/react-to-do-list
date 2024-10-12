import './App.css';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [employle, setEmployle] = useState('');
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('');  // To track the selected status
  const [filterStatus, setFilterStatus] = useState(''); // State for filtering

  const handleSave = () => {
    if (name || desc || employle) {
      const newData = { name, desc, employle, status };
      setData([...data, newData]);

      // Clear input fields
      setName('');
      setDesc('');
      setEmployle('');
      setStatus('');  // Clear the status as well
    }
  };

  const handleSelectChange = (e, index) => {
    const newStatus = e.target.value;

    // Update the status in the data array
    const updatedData = data.map((item, idx) =>
      idx === index ? { ...item, status: newStatus } : item
    );
    setData(updatedData);
  };

  // Function to get both text and background color based on status
  const getSelectStyle = (status) => {
    switch (status) {
      case 'Start':
        return { color: 'white', backgroundColor: 'red' };
      case 'Process':
        return { color: 'black', backgroundColor: 'orange' };
      case 'Completed':
        return { color: 'white', backgroundColor: 'green' };
      default:
        return { color: 'black', backgroundColor: 'lightgray' };  // Default for unselected
    }
  };

  // Filter data based on selected status
  const filteredData = filterStatus
    ? data.filter(item => item.status === filterStatus)
    : data;

  return (
    <div className="App">
      <Container className='form'>
        <h1 className='text-center'>Form</h1>
        <input
          type='text'
          placeholder='Job Title'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='name'
        />

        <input
          type='text'
          placeholder='Enter your description'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className='desc'
        />

        <input
          type='text'
          placeholder='Employle Name'
          value={employle}
          onChange={(e) => setEmployle(e.target.value)}
          className='employle'
        />

        <Button className='save' onClick={handleSave}>Save</Button>
      </Container>

      {/* Filter by status */}
      <Container className='filter-container'>
        <h2 className='text-center'>Filter by Status</h2>
        <select
          className='status-filter'
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">All</option>
          <option value="Start">Start</option>
          <option value="Process">Process</option>
          <option value="Completed">Completed</option>
        </select>
      </Container>

      {/* Data display section */}
      <Container className='data-container'>
        <Row style={{ display: 'flex', flexWrap: 'wrap' }}> {/* Enable wrapping */}
          {filteredData.map((details, index) => (
            <Col key={index} md={4} style={{ marginBottom: '10px' }}>
              <Card
                className='d-flex flex-row align-items-center card'
                style={{ ...getSelectStyle(details.status) }} 
              >
                <Card.Body className='d-flex flex-column justify-content-center' style={{ flex: 2 }}>
                  <Card.Text className='text'>
                    <p><strong>Name:</strong> {details.name}</p>
                    <p><strong>Description:</strong> {details.desc}</p>
                    <p><strong>Employle Name:</strong> {details.employle}</p>
                  </Card.Text>
                </Card.Body>

                <div className='d-flex align-items-center' style={{ flex: 1, padding: '0 20px' }}>
                  <select
                    className='option'
                    value={details.status || ''}
                    onChange={(e) => handleSelectChange(e, index)}
                  >
                    <option value="">Select Status</option>
                    <option value="Start">Start</option>
                    <option value="Process">Process</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  );
}

export default App;
