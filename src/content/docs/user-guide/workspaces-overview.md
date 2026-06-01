---
title: Workspaces Overview
description: Create workspaces, invite members, assign roles, and manage shared graphics files and assets.
---

Each **workspace** contains its own graphics files and assets. Shared workspaces let team members access and edit the same files.

## Personal and shared workspaces

Every user has at least **one Personal Workspace**. Additional shared workspaces can be created based on the user's license type.

| **License** | **Workspaces Available** |
|-------------|-------------------------|
| **Free** | 1 Personal Workspace |
| **Unlimited** | 1 Personal Workspace + Unlimited Shared Workspaces |

:::note
**Personal Workspaces** are for private use only and cannot be shared with other users. A personal workspace is a free space without other members.
:::

### Moving files between workspaces

Graphics files and their linked assets are workspace-bound. When a graphics file is moved to another workspace, all its linked assets (images, fonts, data sources) are copied with it.

## Members & roles

Shared workspaces support multiple members with different permission levels:

| **Role** | **Permissions** |
|----------|----------------|
| **Owner** | Full control: manage workspace, members, assets, and transactions. Can delete the workspace. |
| **Admin** | Manage workspace, members, and transactions. Cannot delete the workspace. |
| **Collaborator** | Create and access workspace graphics files. Cannot manage workspace, members, or access transactions. |

### Adding members

With the **Unlimited** license, you can add members to your shared workspaces. The **Free** plan does not support shared workspaces.

To invite a member:
1. Open **Workspace detail > Team members**.
2. Click **Invite**.
3. Enter the user's **email** and select a **role** (Admin or Collaborator).
4. Click **Invite** to send the invitation.

If the user already has a Tweenly account, they receive an invitation notification. If not, a new account is created and login info is sent to their email.

Invited members appear with status **Pending invite** until they accept.

### Removing members

1. In the member list, click the **Remove** button next to the member.
2. Confirm the removal. This action is irreversible.

## Workspace deletion

:::danger
Deleting a workspace removes all its graphics files and revokes access for all members. This action is irreversible.
:::

To delete a workspace:
1. Open **Workspace detail**.
2. Scroll to the **Workspace deletion** section.
3. Click **Delete workspace** and confirm.

Only the workspace **Owner** can delete a workspace.

## Assets

Assets are stored at the workspace level and shared across all graphics files in that workspace. For full details, see [Assets](/user-guide/assets/).

## TL;DR

- **Personal Workspaces** are private; **shared workspaces** enable team collaboration.
- Three roles: **Owner** (full control), **Admin** (manage, no delete), **Collaborator** (create and access files).
- Invite members by email — they get an account automatically if they don't have one.
- Assets are workspace-bound and shared across all graphics files in that workspace.
- Deleting a workspace is irreversible and removes all its content.
