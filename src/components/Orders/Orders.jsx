import React, { useContext } from 'react';
import MaterialTable from 'material-table';
import StoreContext from 'components/Store/Context';
import SpanStatus from 'components/SpanStatus/SpanStatus';
import tableIcons from 'components/MaterialTableIcons/MaterialTableIcons';

const Orders = (props) => {
    const { username } = useContext(StoreContext)
    const ordersArray = props.orders.map((order) => {
        if (username === order.customerName) {
            let theme = ''
            if (order.status === 'finalizado') {
                theme = 'contained-green-disabled'
            }
            else if (order.status === 'em andamento') {
                theme = 'contained-orange-disabled'
            }
            else if (order.status === 'criado') {
                theme = 'contained-red-disabled'
            }
            const tableData = {
                imageUrl: "https://imagensemoldes.com.br/wp-content/uploads/2020/05/Desenho-Pastel-PNG.png",
                number: order.number,
                costumerName: order.customerName,
                status: <SpanStatus
                    theme={theme}
                >{order.status}
                </SpanStatus>,
            }
            return tableData
        } return null
        
    });

    return (
        <div className="cardCart">
            <div className="col-md-8Cart cartCart">
                <MaterialTable
                    columns={[
                        {
                            title: '',
                            field: 'imageUrl',
                            render: (rowData) => <img id="pastel" src={rowData.imageUrl} alt=""/>,
                            cellStyle: {
                                textAlign:'center',
                            },
                        },
                        {
                            title: 'Número',
                            field: 'number',
                            type: 'numeric',
                            cellStyle: {
                                textAlign:'center',
                            },
                        },
                        {
                            title: 'Cliente',
                            field: 'costumerName',
                            cellStyle: {
                                textAlign:'center',
                            }
                        },
                        {
                            title: 'Status',
                            field: 'status',
                            cellStyle: {
                                textAlign:'center',
                            }
                        }
                    ]}
                    data={ordersArray}
                    title="Pedidos"
                    options={{
                        pageSize: 10,
                        headerStyle: {
                            textAlign: 'center',
                            flexDirection: 'row',
                          }
                      }}
                    localization={{
                        toolbar: {
                            searchPlaceholder: 'Digite o número do pedido'
                    }
                    }}
                    icons={tableIcons}
                />
            </div>
        </div>
    );
};

export default Orders;