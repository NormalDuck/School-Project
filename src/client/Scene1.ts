import { CollectionService, Debris, ReplicatedStorage, ServerStorage, Workspace } from "@rbxts/services";
import { lockCamera, moveCamera } from "./camera";
import { Trove } from "@rbxts/trove";
export async function scene1() {
	ReplicatedStorage.Fall.Parent = Workspace;
	lockCamera(Workspace.Fall.camera[1].CFrame);
	task.wait(3);
	lockCamera(Workspace.Fall.camera[2].CFrame).await();
	task.wait(3);
	moveCamera(Workspace.Fall.camera[3].CFrame, 1, Enum.EasingStyle.Quad)
		.andThen(() => {
			const animate = new Instance("Animation");
			print("hello");
			animate.AnimationId = "rbxassetid://17614104313";
			task.spawn(() => {
				for (const single of Workspace.Fall["Corn Field"].Corn.Corn.GetChildren() as BasePart[]) {
					let connection: RBXScriptConnection;
					// eslint-disable-next-line prefer-const
					connection = single.Touched.Connect((thing) => {
						if (thing.HasTag("HarvestIndian")) {
							single.Destroy();
							connection.Disconnect();
						}
					});
				}
			});
			for (const indian of CollectionService.GetTagged("HarvestIndian") as Rig[]) {
				const track = indian.Humanoid.Animator.LoadAnimation(animate);
				track.Looped = true;
				track.Play();
			}
		})
		.await();
	moveCamera(Workspace.Fall.camera[4].CFrame, 20).await();
	Workspace.Fall.Destroy();
}
