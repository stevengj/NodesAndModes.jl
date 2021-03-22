var documenterSearchIndex = {"docs":
[{"location":"authors/#Authors","page":"Authors","title":"Authors","text":"","category":"section"},{"location":"authors/","page":"Authors","title":"Authors","text":"The original port from Matlab to Julia was done by Yimin Lin. Subsequent development was done by Jesse Chan.","category":"page"},{"location":"function_index/#NodesAndModes","page":"Index","title":"NodesAndModes","text":"","category":"section"},{"location":"function_index/","page":"Index","title":"Index","text":"CurrentModule = NodesAndModes","category":"page"},{"location":"function_index/","page":"Index","title":"Index","text":"Modules = [NodesAndModes]","category":"page"},{"location":"function_index/#NodesAndModes.abctorst-Tuple{Pyr,Any,Any,Any}","page":"Index","title":"NodesAndModes.abctorst","text":"abctorst(elem::Pyr,a,b,c)\n\nConverts from Stroud coordinates (a,b,c) on [-1,1]^3 to reference element coordinates (r,s,t).\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.basis","page":"Index","title":"NodesAndModes.basis","text":"basis(elem::Pyr,N,r,s,t,tol=1e-12)\n\nComputes orthonormal semi-nodal basis on the biunit pyramid element.\n\nWarning: nodal derivative matrices may contain errors for nodes at t = 1. A way to avoid this is to use weak differentiation matrices computed using quadrature rules with only interior nodes.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#NodesAndModes.basis-Tuple{AbstractElemShape,Any,Vararg{Any,N} where N}","page":"Index","title":"NodesAndModes.basis","text":"basis(elem::AbstractElemShape, N, rst...)\n\nComputes orthonormal basis of degree N at tuple of coordinate arrays (r,s,t).\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.basis-Tuple{Line,Any,Any}","page":"Index","title":"NodesAndModes.basis","text":"basis(elem::Line,N,r)\n\nComputes the generalized Vandermonde matrix V of degree N (along with the derivative matrix Vr) at points r.\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.build_warped_nodes-Tuple{AbstractElemShape,Any,Any}","page":"Index","title":"NodesAndModes.build_warped_nodes","text":"build_warped_nodes(elem::AbstractElemShape,N,r1D)\n\nComputes degree N warp-and-blend interpolation nodes for elem = Tri(), Pyr(), or Tet() based on the 1D node set \"r1D\". Returns a tuple \"rst\" containing arrays of interpolation points.\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.edge_basis-Tuple{AbstractElemShape,Any,Vararg{Any,N} where N}","page":"Index","title":"NodesAndModes.edge_basis","text":"edge_basis(elem::AbstractElemShape, N, rst...)\n\nreturns generalized Vandermonde matrix evaluated using an edge basis.\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.edge_basis-Tuple{Any,Any,Any,Any,Any,Vararg{Any,N} where N}","page":"Index","title":"NodesAndModes.edge_basis","text":"edge_basis(N, vertices, edges, basis, vertex_functions, rst...)\n\nComputes edge basis given vertex functions and 1D basis.\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.equi_nodes-Tuple{AbstractElemShape,Any}","page":"Index","title":"NodesAndModes.equi_nodes","text":"equi_nodes(elem::AbstractElemShape, N)\n\nCompute equispaced nodes of degree N.\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.equi_nodes-Tuple{Line,Any}","page":"Index","title":"NodesAndModes.equi_nodes","text":"equi_nodes(elem::Line,N)\n\nComputes equally spaced nodes of degree N.\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.gauss_lobatto_quad-Tuple{Any,Any,Any}","page":"Index","title":"NodesAndModes.gauss_lobatto_quad","text":"gauss_lobatto_quad(α, β, N)\n\nComputes Legendre-Gauss-Lobatto quadrature points and weights with Jacobi weights α,β.\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.gauss_quad-Tuple{Any,Any,Any}","page":"Index","title":"NodesAndModes.gauss_quad","text":"gauss_quad(α, β, N)\n\nCompute nodes and weights for Gaussian quadrature with Jacobi weights (α,β).\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.get_edge_list-Tuple{AbstractElemShape}","page":"Index","title":"NodesAndModes.get_edge_list","text":"get_edge_list(elem::AbstractElemShape)\n\nReturns list of edges for a specific element (elem = Tri(), Pyr(), or Tet()).\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.grad_vandermonde-Tuple{AbstractElemShape,Any,Vararg{Any,N} where N}","page":"Index","title":"NodesAndModes.grad_vandermonde","text":"grad_vandermonde(elem::AbstractElemShape, N, rst...)\n\nComputes the generalized Vandermonde derivative matrix V of degree N at points (r,s,t).\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.interp_1D_to_edges-Tuple{AbstractElemShape,Any}","page":"Index","title":"NodesAndModes.interp_1D_to_edges","text":"interp_1D_to_edges(elem::AbstractElemShape, r1D)\n\nInterpolates points r1D to the edges of an element (elem = :Tri, :Pyr, or :Tet)\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.jacobiP-NTuple{4,Any}","page":"Index","title":"NodesAndModes.jacobiP","text":"jacobiP(x, α, β, N)\n\nEvaluate the Jacobi Polynomial (α, β) of order N at points x\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.meshgrid-Tuple{AbstractArray{T,1} where T}","page":"Index","title":"NodesAndModes.meshgrid","text":"meshgrid(vx) Computes an (x,y)-grid from the vectors (vx,vx). For more information, see the MATLAB documentation.\n\nCopied and pasted directly from VectorizedRoutines.jl. Using VectorizedRoutines.jl directly causes Pkg versioning issues with SpecialFunctions.jl\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.meshgrid-Union{Tuple{T}, Tuple{AbstractArray{T,1},AbstractArray{T,1},AbstractArray{T,1}}} where T","page":"Index","title":"NodesAndModes.meshgrid","text":"meshgrid(vx,vy,vz) Computes an (x,y,z)-grid from the vectors (vx,vy,vz). For more information, see the MATLAB documentation.\n\nCopied and pasted directly from VectorizedRoutines.jl. Using VectorizedRoutines.jl directly causes Pkg versioning issues with SpecialFunctions.jl\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.meshgrid-Union{Tuple{T}, Tuple{AbstractArray{T,1},AbstractArray{T,1}}} where T","page":"Index","title":"NodesAndModes.meshgrid","text":"meshgrid(vx,vy) Computes an (x,y)-grid from the vectors (vx,vy). For more information, see the MATLAB documentation.\n\nCopied and pasted directly from VectorizedRoutines.jl. Using VectorizedRoutines.jl directly causes Pkg versioning issues with SpecialFunctions.jl\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.nodes-Tuple{AbstractElemShape,Any}","page":"Index","title":"NodesAndModes.nodes","text":"nodes(elem::AbstractElemShape,N)\n\nComputes interpolation nodes of degree N. Edge nodes coincide with (N+1)-point Lobatto points. Default routine for elem = Tet(), Pyr(), Tri().\n\nFor Quad(), Hex(), Wedge() elements, nodes(...) returns interpolation points constructed using a tensor product of lower-dimensional nodes. \n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.nodes-Tuple{Line,Any}","page":"Index","title":"NodesAndModes.nodes","text":"nodes(elem::Line,N)\n\nComputes interpolation nodes of degree N.\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.nodes-Tuple{Pyr,Any}","page":"Index","title":"NodesAndModes.nodes","text":"nodes(elem::Pyr,N)\n\nComputes interpolation nodes of degree N. Edge nodes coincide with (N+1)-point Lobatto points. Triangular face nodes coincide with Tri.nodes(N), quadrilateral face nodes coincide with tensor product (N+1)-point Lobatto points.\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.quad_nodes-Tuple{AbstractElemShape,Any}","page":"Index","title":"NodesAndModes.quad_nodes","text":"quad_nodes(elem::AbstractElemShape, N)\n\nCompute quadrature nodes and weights exact for (at least) degree 2N polynomials.\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.quad_nodes-Tuple{Line,Any}","page":"Index","title":"NodesAndModes.quad_nodes","text":"quad_nodes(elem::Line,N)\n\nComputes (N+1)-point Gauss quadrature rule (exact for degree 2N+1 polynomials)\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.quad_nodes_tet-Tuple{Any}","page":"Index","title":"NodesAndModes.quad_nodes_tet","text":"quad_nodes_tet(N)\n\nReturns quadrature nodes and weights which exactly integrate degree N polynomials\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.rstoab","page":"Index","title":"NodesAndModes.rstoab","text":"rstoab(r, s, tol = 1e-12)\n\nConverts from reference bi-unit right triangle coordinate (r,s) to polynomial basis evaluation coordinates (a,b) on the domain [-1,1]^2\n\n\n\n\n\n","category":"function"},{"location":"function_index/#NodesAndModes.simplex_2D-NTuple{4,Any}","page":"Index","title":"NodesAndModes.simplex_2D","text":"simplex_2D(a, b, i, j)\n\nEvaluate 2D PKDO basis phi_ij at points (a,b) on the Duffy domain [-1,1]^2\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.simplex_3D-NTuple{6,Any}","page":"Index","title":"NodesAndModes.simplex_3D","text":"simplex_3D(a, b, c, i, j, k)\n\nEvaluate 3D \"Legendre\" basis phi_ijk at (a,b,c) coordinates on the [-1,1] cube\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.stroud_quad_nodes-Tuple{AbstractElemShape,Any}","page":"Index","title":"NodesAndModes.stroud_quad_nodes","text":"stroud_quad_nodes(elem::AbstractElemShape,N)\n\nReturns Stroud-type quadrature nodes and weights constructed from the tensor product of (N+1)-point Gauss-Jacobi rules. Exact for degree 2N polynomials\n\n\n\n\n\n","category":"method"},{"location":"function_index/#NodesAndModes.vandermonde-Tuple{AbstractElemShape,Any,Vararg{Any,N} where N}","page":"Index","title":"NodesAndModes.vandermonde","text":"vandermonde(elem::AbstractElemShape, N, rst...)\n\nComputes the generalized Vandermonde matrix V of degree N at points (r,s,t).\n\n\n\n\n\n","category":"method"},{"location":"#NodesAndModes","page":"Home","title":"NodesAndModes","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"NodesAndModes.jl is a package to compute nodes (interpolation and quadrature points) and modes (orthogonal polynomials) on various reference elements for use in high order finite element and nodal discontinuous Galerkin (DG) methods.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The codes inspired by the Matlab codes for the book \"Nodal Discontinuous Galerkin methods\" by Hesthaven and Warburton (2007) and high order interpolation nodes on triangles, tetrahedra, and pyramids using the \"Interpolatory Warp and Blend\" procedure from Chan and Warburton 2015.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package is registered and can be installed via ] add NodesAndModes. Julia v1.3 is required.","category":"page"},{"location":"#Package-organization","page":"Home","title":"Package organization","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"NodesAndModes.jl supports seven types of elements in 1D, 2D, and 3D.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Line (1D lines/intervals)\nTri (2D triangles)\nQuad (2D quadrilaterals)\nTet (3D tetrahedra)\nHex (3D hexahedra)\nWedge (3D wedges/prisms)\nPyr (3D pyramids)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Each module exports the following functions:","category":"page"},{"location":"","page":"Home","title":"Home","text":"basis: computes Vandermonde matrix (columns are evaluations of orthogonal polynomials at different points) and derivative matrices (columns are derivatives of orthogonal polynomials at different points) constructed using orthogonal polynomials on the reference element\nnodes: computes (non-uniform) interpolation nodes on the reference element. All interpolation nodes\nquad_nodes: computes quadrature nodes and weights on the reference element. quad_nodes(N) returns a quadrature rule exact for degree 2N polynomials (e.g., exact integration of the mass matrix).\nequi_nodes: computes equispaced nodes on the reference element (for plotting)","category":"page"},{"location":"","page":"Home","title":"Home","text":"note: Note\nEach module also exports vandermonde and grad_vandermonde for similarity with the Matlab codes in Hesthaven/Warburton 2007. These just call the basis routine and return either Vandermonde or derivative matrices.","category":"page"},{"location":"#Example-usage","page":"Home","title":"Example usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"To compute a 1D Vandermonde matrix using Gauss-Lobatto points and orthonormal polynomials.","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using NodesAndModes\njulia> N = 2\njulia> r = nodes(Line(),N)\njulia> V = vandermonde(Line(),N,r)","category":"page"},{"location":"","page":"Home","title":"Home","text":"To compute a 2D triangular Vandermonde matrix from Warp & Blend points (see Warburton 2006) and orthonormal polynomials on the triangle (with coordinates r,s)","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using NodesAndModes\njulia> N = 2\njulia> r,s = nodes(Tri(),N)\njulia> V = vandermonde(Tri(),N,r,s)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Nodal differentiation matrices Dr and Ds can be computed via","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using NodesAndModes\njulia> N = 2\njulia> r,s = nodes(Tri(),N)\njulia> V,Vr,Vs = basis(Tri(),N,r,s)\njulia> Dr,Ds = (A->A/V).((Vr,Vs))","category":"page"},{"location":"","page":"Home","title":"Home","text":"such that Dr*f(r,s) ≈ df/dr.","category":"page"},{"location":"","page":"Home","title":"Home","text":"A mass matrix M and weak differentation matrices Qr,Qs in finite element or DG methods can be computed using quadrature via","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using LinearAlgebra\njulia> using NodesAndModes\njulia> N = 2\njulia> r,s = nodes(Tri(),N)\njulia> V = vandermonde(Tri(),N,r,s)\njulia> rq,sq,wq = quad_nodes(Tri(),N)\njulia> Vq,Vrq,Vsq = (A->A/V).(basis(Tri(),N,rq,sq))\njulia> M,Qr,Qs = (A->Vq'*diagm(wq)*A).((Vq,Vrq,Vsq))","category":"page"}]
}
