import { Pane, majorScale, Menu, FolderCloseIcon } from 'evergreen-ui'
import React, { FC } from 'react'
import { useRouter } from 'next/router'

const FolderList: FC<{ folders: any[] }> = ({ folders }) => {
  const router = useRouter()
  if (folders.length === 0) {
    return <p style={{ marginLeft: '15px' }}>No folders!</p>
  }

  return (
    <Pane padding={majorScale(2)}>
      <Menu>
        {folders.map((folder) => (
          <Menu.Item
            key={folder._id}
            icon={FolderCloseIcon}
            onClick={() => router.push(`/app/${folder._id}`)}
          >
            {folder.name}
          </Menu.Item>
        ))}
      </Menu>
    </Pane>
  )
}

FolderList.defaultProps = {
  folders: [],
}

export default FolderList
