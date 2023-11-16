import React, { FC, useMemo, ImgHTMLAttributes } from 'react';

import "./avatar.scss";

const avatarTmpl = require('@root/images/no-avatar.png').default;

type Props = {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
} & ImgHTMLAttributes<HTMLImageElement>;

const Avatar: FC<Props> = ({
  src = avatarTmpl,
  onInputChange = undefined,
  user,
  ...rest
}) => {
  const { firstName, lastName } = user;
  const fullName = useMemo(() => `${firstName} ${lastName}`);

  return (
    <div className="profile-avatar">
      <input
        type="file"
        className="profile-avatar__input"
        onChange={(event) => {
          onInputChange(event);
        }}
      />
      <span>{fullName}</span>
      <img
        className="profile-avatar__image"
        src={src}
        alt={rest.alt}
      />
    </div>
  )
};

export default Avatar;