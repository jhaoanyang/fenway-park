import React, { useState } from 'react';
import cx from 'classnames';
import './TwelveCards.scoped.scss';

import Card from '../Cards/Card';

const twelveSections = [
  {
    name: '平凡世界',
    properties: [],
  },
  {
    name: '歷險的召喚',
    properties: [],
  },
  {
    name: '拒絕召喚',
    properties: [],
  },
  {
    name: '遇上師傅',
    properties: [],
  },
  {
    name: '跨越的一道門檻',
    properties: [],
  },
  {
    name: '試煉、盟友、敵人',
    properties: [],
  },
  {
    name: '進逼洞穴最深處',
    properties: [],
  },
  {
    name: '苦難折磨',
    properties: [],
  },
  {
    name: '獎賞',
    properties: ['慶祝', '營火會場景', '情愛場面', '掌控', '掌握寶劍', '萬靈丹的竊賊', '啟蒙', '前所未有的洞察力', '看穿欺詐詭計', '透視力', '自我認知', '神靈顯現', '扭曲偏差'],
  },
  {
    name: '回歸之路',
    properties: ['動機', '報復', '追逐場面', '魔幻脫逃', '仰慕者的追求', '壞蛋落跑', '挫折阻礙'],
  },
  {
    name: '復甦',
    properties: ['全新的人格', '淨化', '兩大苦難折磨', '有形的折磨', '讓英雄主動出擊', '最後對決（攤牌）', '悲劇英雄的死亡與重生', '抉擇', '愛的抉擇', '高潮', '風平浪靜的高潮', '周而復始的高潮', '滌淨', '角色迴圈', '最後機會', '步步為營小心謹慎', '冒領人', '提出證據', '犧牲', '併入', '轉變'],
  },
  {
    name: '帶著仙丹妙藥歸返',
    properties: ['歸返', '循環式結局', '成就圓滿', '開放式結局', '歸返的作用', '驚喜', '賞與罰', '萬靈丹', '愛情萬靈丹', '世界因此改變'],
  },
];

const colors = ['color-0', 'color-1', 'color-2', 'color-3'];

function TwelveCards() {
  const [selectedColor, setSelectedColor] = useState('color-0');

  return (
    <section>
      <main>
        {colors.map((color) => (
          <button
            key={color}
            className={cx(color)}
            onClick={() => setSelectedColor(color)}
            type="button"
          >
            .
          </button>
        ))}
      </main>
      {twelveSections.map((section) => (
        <Card
          key={section.name}
          contentObj={section}
          selectedColor={selectedColor}
        />
      ))}
    </section>
  );
}

export default TwelveCards;
