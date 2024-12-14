
import { UserIcon } from "@heroicons/react/24/outline";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
    cn,
  } from "@nextui-org/react";
  
const ProfileDropDown = ({isDark}) => {
  return (
    <div>
         <Dropdown>
              <DropdownTrigger>
                <Button variant="none" color="primary" className={cn("text-gray-500", isDark && "bg-black text-white")}>
                  <UserIcon className={cn("text-gray-500 w-4 h-4", isDark && "text-white")} /> Account
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="profile">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
              </DropdownMenu>
            </Dropdown>
    </div>
  )
}

export default ProfileDropDown