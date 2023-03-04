import { Card, Row, Col } from "antd";
const MenuCard = ({ menuData }) => {
  return (
    <Row>
      {menuData.map((items) => {
        return (
          <Col sm={24} md={12} lg={12} xl={6} key={items.id}>
            <Card
              hoverable
              style={{
                position: "relative",
                margin: 10,
              }}
              cover={<img alt="example" src={items.image} />}
            >
              <span className="font-poppins bg-primary px-2 py-1 absolute top-40 left-1 w-15 rounded-md">
                {items.category}
              </span>
              <h4 className="font-poppins text-xl uppercase font-bold">
                {items.name}
              </h4>
              <p className="text-base">{items.description.slice(0, 50)}...</p>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};
export default MenuCard;
