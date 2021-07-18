
import styles from './index.css';

import paperstyles from './paper.css';

import { Table } from 'antd'

import LoginForm from '../components/Login'




const login=({page})=>{

  return <div className={paperstyles.paper}><LoginForm/></div>

}

const notExist=({page})=>{

  return <div className={paperstyles.paper}>{`type="${page.type}": 没有对应的组件`}</div>

}

const table=({page})=>{

  return <div className={paperstyles.paper}>{page.text}<Table dataSource={page.data.dataSource} columns={page.data.columns} /></div>

}

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

const doc={

  pages:[
  { type:"login",   text:"login page", sections:[]},

  { type:"table",   text:"table page",data:{dataSource,columns}},
  { type:"now",   text:"table page",data:{dataSource,columns}},


 ]

}

const componentLib=[];

componentLib["table"]=table
componentLib["login"]=login
componentLib["notexist"]=notExist



const renderPage=({doc,page})=>{

  const comp=componentLib[page.type]
  if(!comp){

    return notExist({page})
  }

  return comp({page})



}


export default function() {
  return (
    <div className={styles.normal}>

  {doc.pages.map(page=>renderPage({doc,page}))}


    </div>
  );
}
/*

export default function() {
  return (
    <div className={styles.normal}>

  {doc.pages.map(page=>renderPage(doc,page))}

      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul>
    </div>
  );
}


*/
