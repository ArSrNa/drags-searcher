import { Card, Form, Input, Button, Table, Divider } from "antd";
import { useState } from "react";
import oridata from "./index.json";
import { transform, search } from "./transform";

export default function App() {
  const [res, setRes] = useState([]);
  return (
    <>
      <Card title="查找器">
        <Form
          onFinish={(e) => {
            const resd = transform(oridata);
            let r = search(e.key, resd);
            setRes(r);
          }}
        >
          <Form.Item
            name="key"
            label="药品名"
            rules={[{ required: true, message: "必填" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">提交</Button>
          </Form.Item>
        </Form>
        <Divider />
        <h1>符合条件数据</h1>
        <Table
          dataSource={res}
          columns={[
            {
              title: "位置",
              dataIndex: "position",
              key: "position",
            },
            {
              title: "准确名称",
              dataIndex: "name",
              key: "name",
            },
          ]}
        />
      </Card>
    </>
  );
}
