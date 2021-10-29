import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Space } from 'antd';

const ProductTable = ({ pagination, hasCheckbox, columns, data }) => {
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
    const onSelectChange = useCallback(selectedRowKeys => {
        console.log('selectedRowKeys Changed: ', ...selectedRowKeys);
        setSelectedRowKeys([...selectedRowKeys]);
    }, []);

    // Table에 추가한 프로퍼티
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const hasSelected = selectedRowKeys.length > 0;
    const ReloadBtnStyle = useMemo(
        () => ({ marginBottom: 10, marginRight: 5 }),
        [],
    );
    const ReloadTxtStyle = useMemo(() => ({ marginLeft: 8 }), []);
    const handleDelete = () => {
        console.log(selectedRowKeys);
    };

    return (
        <>
            {hasCheckbox ? (
                <>
                    <Button
                        onClick={handleDelete}
                        disabled={!hasSelected}
                        style={ReloadBtnStyle}
                    >
                        삭제
                    </Button>
                    <Button
                        type="primary"
                        onClick={start}
                        disabled={!hasSelected}
                        loading={loading}
                        style={ReloadBtnStyle}
                    >
                        선택 초기화
                    </Button>
                    <span style={ReloadTxtStyle}>
                        {hasSelected
                            ? `Selected ${selectedRowKeys.length} items`
                            : ''}
                    </span>
                </>
            ) : null}
            <Table
                onRow={record => {
                    return {
                        onClick: () => console.log('Hello', record),
                    };
                }}
                size="small"
                pagination={pagination}
                rowSelection={hasCheckbox ? rowSelection : null}
                columns={columns}
                dataSource={data}
                scroll={{ y: 500 }}
            />
        </>
    );
};

ProductTable.propTypes = {
    pagination: PropTypes.bool,
    hasCheckbox: PropTypes.bool,
    columns: PropTypes.array,
    data: PropTypes.array,
};
export default ProductTable;
