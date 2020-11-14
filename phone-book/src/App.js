import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import './App.css';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  
  // id : 컴포넌트의 일반 클래스 내부 변수로 선언
  // 렌더링 되는 것들과 상관이 없는 것은 굳이 넣어줄 필요 X
  id = 2;
  state = {
    infomation: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ]
  }

  handleCreate = (data) => {
    const { infomation } = this.state;
    this.setState({
      infomation: infomation.concat({ id: this.id++, ...data })
    })
  }

  handleRemove = (id) => {
    const { infomation } = this.state;
    console.log(`infomation ${JSON.stringify(infomation)}`);
    this.setState({
      infomation: infomation.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    console.log(`update infomation ${JSON.stringify(information)}`);
    this.setState({
      infomation: information.map(
        info => id === info.id
          ? { ...info, ...data }
          : info
      )
    })
  }

  render() {
    const { infomation } = this.state
    return (
      <div>
        <PhoneForm 
          onCreate={this.handleCreate} 
        />
        <PhoneInfoList 
          data={infomation} 
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
