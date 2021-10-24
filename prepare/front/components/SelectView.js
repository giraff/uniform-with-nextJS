import React, { useCallback, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { Table, Button, Space, Row } from "antd";

const SelectView = ({ hasCheckbox, columns, data }) => {
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // reload
  const start = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  }, []);

  // 선택한 행 배열
  const onSelectChange = useCallback((selectedRowKeys) => {
    console.log("selectedRowKeys Changed: ", ...selectedRowKeys);
    setSelectedRowKeys([...selectedRowKeys]);
  }, []);

  // Table에 추가한 프로퍼티
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;
  const RemoveTxtStyle = useMemo(() => ({ marginRight: 8, marginTop: 3 }), []);
  const RemoveBtnStyle = useMemo(
    () => ({ marginBottom: 10, marginRight: 5 }),
    []
  );
  return (
    <>
      {hasCheckbox ? (
        <Row justify="end">
          <span style={RemoveTxtStyle}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
          <Button
            type="primary"
            onClick={start}
            disabled={!hasSelected}
            loading={loading}
            style={RemoveBtnStyle}
          >
            삭제
          </Button>
        </Row>
      ) : null}

      <Table
        pagination={false}
        size="small"
        rowSelection={hasCheckbox ? rowSelection : null}
        columns={columns}
        dataSource={data.length !== 0 ? data : null}
      />
    </>
  );
};

SelectView.propTypes = {};
export default SelectView;
