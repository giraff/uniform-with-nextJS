import React, {
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import AppLayout from "../components/Layouts/AppLayout";
import {
  Table,
  Input,
  InputNumber,
  Popconfirm,
  Form,
  Typography,
  Button,
} from "antd";
const EditableContext = React.createContext(null);

// 멤버
const memberData = [];
for (let i = 0; i < 8; i++) {
  memberData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    phoneNumber: `010-${i}${i}${i}${i}-${i}${i}${i}${i}`,
  });
}

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  // 수정할 때 입력할 타입이 number이면, <InputNumber /> 컴포넌트를
  // 단순 string 등 Number 타입이 아니면 <Input /> 컴포넌트 사용
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {/* 수정을 원하면 {<Input~ />} 입력창을 띄우고 그렇지 않으면 그냥 넘어온 값을 띄운다. */}
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(memberData);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: "",
      phoneNumber: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const handleDelete = (key) => {
    const dataSource = data.filter((item) => item.key !== key);
    setData([...dataSource]);
  };

  const handleAdd = useCallback(() => {
    const newData = {
      key: new Date(),
      name: `Edrward ${data.length}`,
      phoneNumber: `000-8888-8888`,
    };

    setData([...data, newData]);
  });

  const columns = [
    {
      title: "name",
      dataIndex: "name",
      width: "25%",
      editable: true,
    },
    {
      title: "phoneNumber",
      dataIndex: "phoneNumber",
      width: "40%",
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <span>
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
            >
              Edit
            </Typography.Link>
            <span>
              <Popconfirm
                title="Sure to Delete?"
                disabled={editingKey !== ""}
                onConfirm={() => handleDelete(record.key)}
              >
                <a disabled={editingKey !== ""}>Delete</a>
              </Popconfirm>
            </span>
          </span>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <>
      <Button
        type="primary"
        style={{
          marginBottom: 16,
        }}
        onClick={handleAdd}
      >
        Add a row
      </Button>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          size="small"
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={false}
        />
      </Form>
    </>
  );
};

const Member = () => {
  const title = "멤버 관리";
  const subTitle = "재고 관리를 같이 할 직원을 등록할 수 있습니다";

  return (
    <AppLayout title={title} subTitle={subTitle}>
      <EditableTable />
    </AppLayout>
  );
};

export default Member;
