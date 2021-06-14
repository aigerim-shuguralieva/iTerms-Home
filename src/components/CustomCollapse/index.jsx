import { Collapse } from "antd";
import "./CustomCollapse.less";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

export const CustomCollapse = ({ el }) => {
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      className="collapse"
      expandIcon={({ isActive }) =>
        isActive ? (
          <MinusOutlined style={{ color: " #8770FF", fontSize: "16px" }} />
        ) : (
          <PlusOutlined style={{ color: " #8770FF", fontSize: "16px" }} />
        )
      }
      ghost
    >
      {el.questions.map((el, id) => {
        return (
          <Panel header={el.question} key={id}>
            <div
              className="answer"
              dangerouslySetInnerHTML={{ __html: el.answer }}
            ></div>
          </Panel>
        );
      })}
    </Collapse>
  );
};
