import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <div>
          <h1>欢迎光临 <code>{siteConfig.title}</code></h1>
          <hr />

          <h1 id="联系方式"><a href="#联系方式" class="headerlink" title="联系方式"></a>联系方式</h1>
          <ul>
            <li>可在后端云公众号直接留言</li>
            <li>✉ <strong><a href="mailto:backendcloud@gmail.com">backendcloud@gmail.com</a></strong></li>
          </ul>
          <hr />
          <div>
	          <span>欢迎您扫一扫下面的微信公众号对"后端云"进行订阅！</span>
            <br/>
	          <img src="/img/wechat-dingyuehao.jpg"></img>
          </div>
        </div>
      </div>
      
    </Layout>
  );
}
