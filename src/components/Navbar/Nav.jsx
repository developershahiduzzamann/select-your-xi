import React from 'react';

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex items-center">
          <span class="sora font-semibold text-base">0</span>
          <span class="ml-1 sora font-semibold text-base">Coin</span>
          <span class="ml-1"><img src="https://i.ibb.co.com/h1HXZ7kD/Currency.png" alt="" /></span>
        </div>
      </div>
    </div>
  );
};

export default Nav;