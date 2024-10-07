const subdomain = window.location.host.split('.')[1] ? window.location.host.split('.')[0] : false;

export const baseApiUrl = process.env.NODE_ENV == 'development' ? `http://backend1.host.local/api` : `https://b-${subdomain}.creditflowmz.com/api`



export const roles = {
    ADMIN: 'SA',
    GERENTE: 'Gerente'
}


export const authorities = {
    DASHBOARD_VIEW: "dashboard-view",
    SETTINGS_VIEW: "setting-view",
    SETTINGS_EDIT: "setting-edit",
    ROLE_VIEW: "role-view",
    ROLE_CREATE: "role-create",
    ROLE_EDIT: "role-edit",
    ROLE_DELETE: "role-delete",
    USER_VIEW: "user-view",
    USER_CREATE: "user-create",
    USER_EDIT: "user-edit",
    USER_DELETE: "user-delete",
    BUSINESS_VIEW: "business-view",
    BUSINESS_CREATE: "business-create",
    BUSINESS_EDIT: "business-edit",
    BUSINESS_DELETE: "business-delete",
    CUSTOMER_VIEW: "customer-view",
    CUSTOMER_CREATE: "customer-create",
    CUSTOMER_EDIT: "customer-edit",
    CUSTOMER_DELETE: "customer-delete",
    LOAN_TRANSACTION_VIEW: "loan_transaction-view",
    LOAN_TRANSACTION_CREATE: "loan_transaction-create",
    LOAN_TRANSACTION_EDIT: "loan_transaction-edit",
    LOAN_TRANSACTION_DELETE: "loan_transaction-delete",
    LOAN_VIEW: "loan-view",
    LOAN_CREATE: "loan-create",
    LOAN_EDIT: "loan-edit",
    LOAN_DELETE: "loan-delete",
    LOAN_SIMULATE: "loan-simulate",
    LOAN_APPROVE: "loan-approve",
    LOAN_DISBURSE: "loan-disburse",
    LOAN_RESTRUCT: "loan-restruct",
    LOAN_CLOSE: "loan-close",
    ACCOUNT_VIEW: "account-view",
    ACCOUNT_CREATE: "account-create",
    ACCOUNT_EDIT: "account-edit",
    ACCOUNT_DELETE: "account-delete",
    MANAGER_VIEW: "manager-view",
    MANAGER_CREATE: "manager-create",
    MANAGER_EDIT: "manager-edit",
    MANAGER_DELETE: "manager-delete",
    WARRANTY_VIEW: "warranty-view",
    WARRANTY_CREATE: "warranty-create",
    WARRANTY_EDIT: "warranty-edit",
    WARRANTY_DELETE: "warranty-delete",
    CREDIT_TYPE_VIEW: "credit_type-view",
    CREDIT_TYPE_CREATE: "credit_type-create",
    CREDIT_TYPE_EDIT: "credit_type-edit",
    CREDIT_TYPE_DELETE: "credit_type-delete",
    DOCUMENT_VIEW: "document-view",
    DOCUMENT_CREATE: "document-create",
    DOCUMENT_EDIT: "document-edit",
    DOCUMENT_DELETE: "document-delete"
}

export const imageEmblem = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY2RTNENjA4NDI0RjExRUQ5Njk4QzhCNzAzNzE1NUM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY2RTNENjA5NDI0RjExRUQ5Njk4QzhCNzAzNzE1NUM4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjZFM0Q2MDY0MjRGMTFFRDk2OThDOEI3MDM3MTU1QzgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjZFM0Q2MDc0MjRGMTFFRDk2OThDOEI3MDM3MTU1QzgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4oGvYcAAADAFBMVEV6enLt6tH08d3//v3o5cuwuaHMzbGdqpr8+vHCo3M1WHnZxItMcYgsW4RWaHaTopZkgY0iVISbi26ttqB6kZHTu4K8m3FRdYrW1bhDaokAPH+EmJK8m27x79mqs57R0rTGya1KYnfy6skUS4MAPYJ2jZDi0ZxDa4YKRILBxKkpUXu+nGqBlpL49eX18uDg3sG7wKYwXocAN4bJy67Ns33m5Mjk4sYcSnyIgnD49ui5vqX9/Pe9nHBwio5phY0ANYk5ZYUcUYP7+e4YToP+/fiYppgOQ34zYIS9wqjey5TU1Lbe3MD6+O2tlGzu47t1jY3GoGkAOIT39OTr6M5efYqwlWzv7NXBnmpZeou2mGuUpJehrZv38dr8+/SnsZ3a2bzc2707ZYl9lJD59OEAOIbKr3mfrJu8m2vw7dfj4MS2vKVtiI0mXKH07dDl1qSNnpXq3rHs4LUjTnufjW4AOYD7+e9hbnXz8NzAnWrZ2LqHmZQFQYG9nGptdHNJbYkAO38URX02YohZeo1gf4vEn2pVd4oAO4TFqHX28+Ld3L+okW3w5sHKomm5mmsAMo1QdIgAO4H59+oAOoLIrHbp2614j49Gc6KlkG2MnpPOz7MAPISkr53IoWnCxqvx6cfAnmr69+rGoGpCXnizuqKsk2wuW4fu69MANoC1vKP69+jEx66KnJZefo0bVJWKnJMAOYgFPn+WiW8WTYzX17qJm5MSSITQ0bSPoJTWwIcALpAAMoHp7/cmV4QZR31ceo0ANIuBfXErV4nh38MAMno/aIdzjI+0u6QVSH1be4mbqJnAoHAOQ4dHbocLP38OR4P+/vvFoGr9/PX+/frJomkAOoXz8Nz9/fikr5zFoGnMo2n28NUGQITEx6sAM4wFOYfT07bf6PPs6NDv7NS/n3CwuKOXpphchK3QpWjT1LjFn23079ejutsyZ6dbfY8CP4K8m3QfUIYoXJPIoWzOpWlZd4uQhXBZe4f7+OyClpGRg3CMm5W+m2oAPn68m2q9m2r///8YuQXRAAABAHRSTlP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AU/cHJQAAD6VJREFUeNqsWXtcU1e25hEhYhAiGEIIFEusSITAQUAIEN5QxSmHh+FRxMcRUKZjq8EfajQyBNSKENJhqhQ6KoK288AOgtVBqRasD4YIBJmOer1W53FflnvvzK23ITmzHydpoIBo5/xBzsne+Vj7W2t9e619bOi5XbZPXArCzs/DD/alEtbQc39iMyfgwmTuB/w0z94L6Imfe8/D3TV4+IdB89fBv0lldQ7gY3OIB3wqoGQ+Orq0J7bwB0CHlW0Mgp9pvfEJ8PNaIpumjxP6bPTlxZsvD70tpG49MjqOWKZD39xPp5P6tNRqeN9J+Nu9NHRQ+fLKJPA5ulc7YG/xp0gT3wBvuikq9GWgpSxMZH0w+NP+VBNi4XWDXuuKbuZRlNtLQHfWUxt92iHb3HSaPjSoGUSc0+uO09f0VDK6jyGptBeGlnr5kwKSeBrrEElvcqRpHUerL8KWXqAD/WQ+8DY9XlDDemFoXWlgI7dPT5IUN9k3HvgqlKAa0QAni6YvXHSE9w4UeUP3Mlx7t3nvbhwkSEKk3w6y7zcyfaiOznSH4RbYFgJ8y46Txbfjqd/2H36hCHHxApERxakhNE9tAfa2qx1xNzxa0ZBdlesrfE6vxyOcqAMy4mn7i0BHcrMgA+Eu3Ae5MAATwjrDE8yDEp/zybuT8P2oSDAh84V3rA/mGNfXs/Fng+966WyMDlmstucEzw1amlo0N0303hOzAa9lvEYyE7T3mnKrJwdnliSBnvvle09D+K+bAbqxt+386kAL2/qOmMg5A+sKKAHh5eDRMD00X68l9PFLfUfRXK/6NXM3OcGd0FBAy5aX2U8Lbe/B9SMIkvLPjtrqmCm5O0dYNpse5VCkPxSru37d07uRX23XEtNFkCTZe2F4zhaHua7u0ZM9W9FDT/b00PacTjrQeX1/ItGvewEHnn2gITne6PYwFTc8ffDxl0UOnKXp4spy+kWu/N7+b3D+tBEc+xniuiokHwock7hvvvM80LdPoG0oF8vro1QtMTZT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'