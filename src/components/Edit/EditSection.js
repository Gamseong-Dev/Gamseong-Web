import React, {PureComponent} from 'react'
import ReactTabs from 'react-tabs'
import EditImageUpload from './EditImageUpload'
const { Tab, Tabs , TabList, TabPanel } = ReactTabs

class EditSection extends PureComponent {
  render(){
    return (
      <div>
        <Tabs>
          <TabList>
            <Tab>프로필 편집</Tab>
            <Tab>비밀번호 변경</Tab>
            <Tab>알림</Tab>
          </TabList>

          <TabPanel>
            <EditImageUpload />
            <div className="cont_wrap">
              <h2>닉네임 변경</h2>
              <input type="text" placeholder={localStorage.getItem('userName')} />
            </div>
            <button className="submit">완료</button>
          </TabPanel>

          <TabPanel>
            <div className="cont_wrap">
              <h2>비밀번호 변경</h2>
              <input type="password" placeholder="비밀번호를 입력해주세요" />
              <input type="password" placeholder="비밀번호를 다시 입력해주세요" />
            </div>
            <button className="submit">완료</button>
          </TabPanel>

          <TabPanel>
            <div className="cont_wrap">
              <h2>알림</h2>
              <input type="checkbox" id="cb2" className="tgl tgl-light" name="alert" />
              <label className="tgl-btn" htmlFor="cb2"></label>
            </div>
            <button className="submit">완료</button>
          </TabPanel>
        </Tabs>

      </div>
    )
  }
}

export default EditSection;
