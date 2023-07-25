import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export function Foodlist1() {
  return (
    <Card style={{ width: '18rem' }}>
      
      <Card.Body >
          <Image src="card-09.jpg" width={171} height={175} roundedCircle />
        <Card.Title>แกงอ่อมหอยขม</Card.Title>
        <Card.Text>
        แกงอ่อมหอยขม เป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ ตามวิถีภูมิปัญญาท้องถิ่น ของจังหวัดอุบลราชธานี ที่ได้สืบทอดกันมารุ่นต่อรุ่น เป็นแกงอ่อมอาหารพื้นเมืองที่อุดมไปด้วยคุณค่าทางโภชนาการเพราะส่วนประกอบหลักส่วนใหญ่เป็นผักและสมุนไพรพื้นบ้านนานาชนิดเป็นความผสมผสานที่ลงตัวระหว่างชนิดของอาหาร และเครื่องปรุง มีเสน่ห์ของความเป็นไทย 
        </Card.Text>
        <Button variant="secondary">เรียนรู้เพิ่มเติม</Button>
      </Card.Body>
    </Card>
    
  );
}

export default Foodlist1;