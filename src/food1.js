import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export function Foodlist1() {
  return (
    <Card style={{ width: '18rem' }}>
      
      <Card.Body >
          <Image src="card-07.jpg" width={171} height={175} roundedCircle />
        <Card.Title>อู๋หน่อไม้พุงปลา</Card.Title>
        <Card.Text>
        หน่อไม้พุงปลา เป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ ตามวิถีภูมิปัญญาท้องถิ่น ของจังหวัดอุบลราชธานี ที่ได้สืบทอดกันมารุ่นต่อรุ่น มีความโดดเด่นและมีความเป็นเอกลักษณ์ของจังหวัดอุบลราชธานี 
        </Card.Text>
        <Button variant="secondary">เรียนรู้เพิ่มเติม</Button>
      </Card.Body>
    </Card>
    
  );
}

export default Foodlist1;