interface Workspace extends Model {
	winter: Folder & {
		Grass: MeshPart;
		["Classic Baseplate"]: Part;
		emmitor: Part;
		camera: Folder & {
			["1"]: Part;
			["4"]: Part;
			["3"]: Part;
			["2"]: Part;
		};
		snowtree: Folder;
		bison: Model & {
			legleftfront: UnionOperation;
			Humanoid: Humanoid;
			legbackback: UnionOperation;
			legrightfront: UnionOperation;
			torso: UnionOperation;
			head: Part;
			legbackright: UnionOperation;
		};
		killer: Model & {
			["Left Leg"]: Part & {
				LeftFootAttachment: Attachment;
			};
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			["Right Leg"]: Part & {
				RightFootAttachment: Attachment;
			};
			Head: Part & {
				HatAttachment: Attachment;
				["Default ROBLOX Face"]: Decal;
				FaceFrontAttachment: Attachment;
				HairAttachment: Attachment;
				Mesh: SpecialMesh;
				FaceCenterAttachment: Attachment;
			};
			Torso: Part & {
				RightCollarAttachment: Attachment;
				WaistCenterAttachment: Attachment;
				BodyBackAttachment: Attachment;
				Neck: Motor6D;
				LeftCollarAttachment: Attachment;
				["Left Hip"]: Motor6D;
				["Right Hip"]: Motor6D;
				["Right Shoulder"]: Motor6D;
				["Left Shoulder"]: Motor6D;
				BodyFrontAttachment: Attachment;
				WaistBackAttachment: Attachment;
				WaistFrontAttachment: Attachment;
				NeckAttachment: Attachment;
			};
			HumanoidRootPart: Part & {
				RootJoint: Motor6D;
				RootAttachment: Attachment;
			};
			Spear: Model & {
				["Spear End"]: UnionOperation;
				["Spear Handle"]: Part;
			};
			["Right Arm"]: Part & {
				RightShoulderAttachment: Attachment;
				RightGripAttachment: Attachment;
			};
			["Left Arm"]: Part & {
				LeftGripAttachment: Attachment;
				LeftShoulderAttachment: Attachment;
			};
			Pants: Pants;
			AnimSaves: ObjectValue;
			["Body Colors"]: BodyColors;
			defaultAccessory: Accessory & {
				Handle: Part & {
					HatAttachment: Attachment;
					OriginalSize: Vector3Value;
					TouchInterest: TouchTransmitter;
					SpecialMesh: SpecialMesh;
					AvatarPartScaleType: StringValue;
				};
			};
		};
	};
	Camera: Camera;
	president: Folder & {
		["Classic Baseplate"]: Part;
		president: Model;
		Desk: Model;
		DeskLamp: Model & {
			Cable: MeshPart & {
				Weld: Weld;
			};
			LightHousing: Model & {
				Cylinder: MeshPart;
				Glass: MeshPart;
				Bulb: MeshPart & {
					GlassLight: PointLight;
					PointLight: PointLight;
				};
				Stem: MeshPart;
			};
			ThumbnailCamera: Camera;
			Metal: Model & {
				Stand: MeshPart;
				Cord: MeshPart;
				Base: MeshPart & {
					Weld: Weld;
				};
				Hinge: MeshPart;
			};
		};
		camera: Folder & {
			["1"]: Part;
			["2"]: Part;
		};
		Door: Model;
	};
	Senate: Folder & {
		outer: Model;
		floor: Part;
		senate: Model;
		border: Model;
		roof: Part;
		camera: Folder & {
			["1"]: Part;
			["3"]: Part;
			["2"]: Part;
		};
		["Tall Lamp"]: Model & {
			Part: Part;
		};
		inner: Model;
		president: Model;
		["Classic Baseplate"]: Part;
		light: Part & {
			Attachment: Attachment & {
				PointLight: PointLight;
			};
		};
	};
	war: Folder & {
		cameras: Folder & {
			["1"]: Part;
			["3"]: Part;
			["2"]: Part;
			["5"]: Part;
			["4"]: Part;
			["7"]: Part;
			["6"]: Part;
		};
		exp4: Part;
		whole: Folder;
		Army: Model;
		["HH-Fort"]: Model & {
			Stairs: UnionOperation;
			Union: UnionOperation;
			Fortplate: Part;
			Cobble: UnionOperation;
			Gate: UnionOperation;
			Wallish: UnionOperation;
		};
		["Classic Baseplate"]: Part;
		smokes: Model;
		exp1: Part;
		army: Model & {
			["Left Leg"]: Part;
			Humanoid: Humanoid;
			["Right Leg"]: Part;
			Head: Part & {
				Mesh: SpecialMesh;
				Decal: Decal;
			};
			Torso: Part & {
				Decal: Decal;
			};
			Shirt: Shirt;
			["Left Arm"]: Part;
			Handle: Part & {
				Mesh: SpecialMesh;
			};
			Pants: Pants;
			["Right Arm"]: Part;
			Hair: Part & {
				Mesh: SpecialMesh;
			};
		};
		["America Flag (Animated)"]: Model & {
			Flag: Model & {
				["1"]: MeshPart;
				["15"]: MeshPart;
				["3"]: MeshPart;
				["2"]: MeshPart;
				["5"]: MeshPart;
				["4"]: MeshPart;
				["7"]: MeshPart;
				["6"]: MeshPart;
				["14"]: MeshPart;
				["8"]: MeshPart;
				["16"]: MeshPart;
				["9"]: MeshPart;
				["13"]: MeshPart;
				["12"]: MeshPart;
				["11"]: MeshPart;
				["10"]: MeshPart;
			};
			Animate: Script;
			FlagPole: Model;
		};
		exp2: Part;
		sandbags: Model;
		exp3: Part;
	};
	Fall: Folder & {
		indians: Folder;
		["Classic Baseplate"]: Part;
		Sign: Model & {
			TextGui: SurfaceGui & {
				TextLabel: TextLabel;
				Text: TextLabel;
			};
			Parts: Folder & {
				Stand: Part;
				Text: Part;
				Frame: UnionOperation;
				Stick: Part;
			};
		};
		["Corn Field"]: Model & {
			Fence: Model & {
				Folder: Folder & {
					Folder: Folder;
				};
			};
			Corn: Model & {
				Part: Part;
				Corn: Folder;
			};
		};
		camera: Folder & {
			["1"]: Part;
			["4"]: Part;
			["3"]: Part;
			["2"]: Part;
		};
		trees: Model;
	};
	["Lumina Particles"]: Folder;
	Rig: Model & {
		["Left Leg"]: Part & {
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid & {
			Animator: Animator;
			HumanoidDescription: HumanoidDescription;
			Status: Status;
		};
		["Right Leg"]: Part & {
			RightFootAttachment: Attachment;
		};
		Head: Part & {
			HatAttachment: Attachment;
			FaceFrontAttachment: Attachment;
			HairAttachment: Attachment;
			face: Decal;
			Mesh: SpecialMesh;
			FaceCenterAttachment: Attachment;
		};
		Torso: Part & {
			RightCollarAttachment: Attachment;
			WaistCenterAttachment: Attachment;
			BodyBackAttachment: Attachment;
			Neck: Motor6D;
			LeftCollarAttachment: Attachment;
			["Left Hip"]: Motor6D;
			roblox: Decal;
			["Right Hip"]: Motor6D;
			["Left Shoulder"]: Motor6D;
			["Right Shoulder"]: Motor6D;
			BodyFrontAttachment: Attachment;
			WaistBackAttachment: Attachment;
			WaistFrontAttachment: Attachment;
			NeckAttachment: Attachment;
		};
		HumanoidRootPart: Part & {
			RootJoint: Motor6D;
			RootAttachment: Attachment;
		};
		["Right Arm"]: Part & {
			RightShoulderAttachment: Attachment;
			RightGripAttachment: Attachment;
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			LeftShoulderAttachment: Attachment;
		};
		["Body Colors"]: BodyColors;
		Animate: LocalScript & {
			idle: StringValue & {
				Animation2: Animation & {
					Weight: NumberValue;
				};
				Animation1: Animation & {
					Weight: NumberValue;
				};
			};
			jump: StringValue & {
				JumpAnim: Animation;
			};
			sit: StringValue & {
				SitAnim: Animation;
			};
			run: StringValue & {
				RunAnim: Animation;
			};
			toolnone: StringValue & {
				ToolNoneAnim: Animation;
			};
			ScaleDampeningPercent: NumberValue;
			PlayEmote: BindableFunction;
			fall: StringValue & {
				FallAnim: Animation;
			};
			climb: StringValue & {
				ClimbAnim: Animation;
			};
			walk: StringValue & {
				WalkAnim: Animation;
			};
		};
	};
}
